#!/usr/bin/env python3
"""
Build pre-rendered MiniMax MP3s for every Chinese string the Y7 Pitch Prep
site speaks. Idempotent — re-run after editing vocab/sentences and it only
re-renders strings whose hash changed.

Outputs:
  audio/<sha1[:12]>.mp3      one file per unique Chinese string
  audio/manifest.json        { "<text>": "<hash>.mp3" } for app.js to consume

Reads MINIMAX_API_KEY from env. Voice + speed are constants below — edit
them and re-run to swap.
"""
from __future__ import annotations
import hashlib
import json
import os
import re
import sys
import time
from pathlib import Path

import requests

VOICE_ID = "Chinese (Mandarin)_Wise_Women"
SPEED = 0.85
MODEL = "speech-02-hd"
ENDPOINT = "https://api.minimax.io/v1/t2a_v2"

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "audio"
MANIFEST_PATH = AUDIO_DIR / "manifest.json"


def collect_strings() -> list[str]:
    """Pull every Chinese string the site will TTS."""
    strings: set[str] = set()

    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    # VOCAB items: char: 'xxx'
    for m in re.finditer(r"char:\s*'([^']+)'", app_js):
        strings.add(m.group(1))
    # SENTENCES items: cn: 'xxx。'
    for m in re.finditer(r"cn:\s*'([^']+)'", app_js):
        strings.add(m.group(1))

    # data-speak="xxx" in any HTML file
    for html in ROOT.glob("*.html"):
        text = html.read_text(encoding="utf-8")
        for m in re.finditer(r'data-speak="([^"]+)"', text):
            strings.add(m.group(1))

    return sorted(strings)


def hash_text(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:12]


def synth(text: str, key: str, out_path: Path) -> None:
    body = {
        "model": MODEL,
        "text": text,
        "voice_setting": {"voice_id": VOICE_ID, "speed": SPEED, "vol": 1.0, "pitch": 0},
        "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1},
    }
    headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
    for attempt in range(6):
        r = requests.post(ENDPOINT, headers=headers, json=body, timeout=90)
        j = r.json()
        code = j.get("base_resp", {}).get("status_code")
        if code == 0:
            out_path.write_bytes(bytes.fromhex(j["data"]["audio"]))
            return
        if code == 1002:
            wait = 5 * (attempt + 1)
            print(f"    rate-limited, sleeping {wait}s...")
            time.sleep(wait)
            continue
        raise RuntimeError(f"MiniMax error {code} on {text!r}: {j.get('base_resp')}")
    raise RuntimeError(f"MiniMax giving up on {text!r} after rate-limit retries")


def main() -> int:
    key = os.environ.get("MINIMAX_API_KEY", "").strip()
    if not key:
        print("MINIMAX_API_KEY not set", file=sys.stderr)
        return 2

    AUDIO_DIR.mkdir(exist_ok=True)
    strings = collect_strings()
    print(f"Found {len(strings)} unique Chinese strings")

    manifest: dict[str, str] = {}
    rendered = 0
    skipped = 0
    for i, text in enumerate(strings, 1):
        h = hash_text(text)
        fname = f"{h}.mp3"
        out_path = AUDIO_DIR / fname
        manifest[text] = fname
        if out_path.exists():
            skipped += 1
            continue
        print(f"  [{i:2}/{len(strings)}] {text!r:40s} -> {fname}")
        synth(text, key, out_path)
        rendered += 1
        time.sleep(1.5)

    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True),
        encoding="utf-8",
    )
    print(f"\nDone. Rendered {rendered}, reused {skipped}, manifest -> {MANIFEST_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
