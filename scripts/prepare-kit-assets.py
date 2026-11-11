"""Copy kit assets into public/kit and strip near-black backgrounds."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(
    r"C:\Users\ecalves\.cursor\projects\c-Users-ecalves-Documents-Projetos-ecalvesdev\assets"
)
OUT = Path(__file__).resolve().parents[1] / "public" / "kit"

# Prefer the higher-detail PNG when duplicates exist (larger file wins).
ICON_KEYS = [
    "ai",
    "architecture",
    "automation",
    "cloud",
    "code",
    "data",
    "integration",
    "performance",
    "scalability",
    "security",
]
BG_KEYS = ["blue_grid", "diagonal_streaks", "data_particles", "node_network"]
DECOR_KEYS = [
    "corner_brackets",
    "separator_beam",
    "circuit_lines",
    "flow_arrows",
]


def pick_best(prefix: str) -> Path:
    matches = [
        p
        for p in ASSETS.glob(f"{prefix}-*.png")
        if p.is_file() and not p.name.startswith("Logo")
    ]
    if not matches:
        raise FileNotFoundError(prefix)
    return max(matches, key=lambda p: p.stat().st_size)


def strip_black(im: Image.Image, threshold: int = 28) -> Image.Image:
    rgba = im.convert("RGBA")
    pixels = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if r <= threshold and g <= threshold and b <= threshold:
                pixels[x, y] = (0, 0, 0, 0)
    return rgba


def export(src: Path, dest: Path, *, crop: bool = True) -> None:
    im = strip_black(Image.open(src))
    if crop:
        bbox = im.getbbox()
        if bbox:
            im = im.crop(bbox)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "PNG", optimize=True)
    print(f"{src.name} -> {dest.relative_to(OUT.parent.parent)} ({im.size})")


def main() -> None:
    for key in ICON_KEYS:
        export(pick_best(key), OUT / "icons" / f"{key}.png", crop=True)
    for key in BG_KEYS:
        # Keep full frame for overlays
        export(pick_best(key), OUT / "backgrounds" / f"{key}.png", crop=False)
    for key in DECOR_KEYS:
        export(pick_best(key), OUT / "decor" / f"{key}.png", crop=True)
    print("done")


if __name__ == "__main__":
    main()
