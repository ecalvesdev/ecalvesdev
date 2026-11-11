"""Prepare transparent brand assets: cleaned logo + Hero/About photos."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    r"C:\Users\ecalves\.cursor\projects\c-Users-ecalves-Documents-Projetos-ecalvesdev\assets"
)
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)


def clear_near_black(im: Image.Image, threshold: int = 28) -> int:
    pixels = im.load()
    w, h = im.size
    cleared = 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (0, 0, 0, 0)
                cleared += 1
    return cleared


def clear_dust_alpha(im: Image.Image, alpha_max: int = 18) -> int:
    """Drop nearly invisible dust/glow that reads as dirt on dark UI."""
    pixels = im.load()
    w, h = im.size
    cleared = 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0 or a > alpha_max:
                continue
            # keep faint anti-alias only on bright glyph edges
            if r > 210 and g > 210 and b > 210:
                continue
            pixels[x, y] = (0, 0, 0, 0)
            cleared += 1
    return cleared


def clear_lens_flare(im: Image.Image) -> int:
    """Remove cyan/blue lens flare + floor reflection under ELIAS CASTRO."""
    pixels = im.load()
    w, h = im.size
    # Wordmark sits in lower third; flare/reflection under it.
    flare_start = int(h * 0.72)
    cleared = 0
    for y in range(flare_start, h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            is_white_glyph = r > 200 and g > 200 and b > 200
            if is_white_glyph:
                continue
            # Flare / glow: blue-cyan dominant
            if b > 70 and b >= g and b >= r and r < 190:
                pixels[x, y] = (0, 0, 0, 0)
                cleared += 1
            elif a < 200 and b > g and b > r:
                pixels[x, y] = (0, 0, 0, 0)
                cleared += 1
            # thin horizontal reflection band (mid greys / muted blues)
            elif y > int(h * 0.88) and max(r, g, b) < 170:
                pixels[x, y] = (0, 0, 0, 0)
                cleared += 1
            # last rows: kill dark blue floor reflection entirely
            elif y > int(h * 0.96) and not is_white_glyph:
                pixels[x, y] = (0, 0, 0, 0)
                cleared += 1
    return cleared


def save_cropped_rgba(im: Image.Image, path: Path) -> Image.Image:
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    im.save(path, "PNG", optimize=True)
    return im


# --- Logo (prefer __1_ variant) ---
logo_candidates = [
    ASSETS / "Logo_E.C._Elias_Castro_em_Azul__1_-b1fc2dca-f61a-4247-9220-5e1b96ba51ce.png",
    ASSETS / "Logo_E.C._Elias_Castro_em_Azul-72e6222e-fbd5-43a4-90fd-1e29e4a2da92.png",
]
logo_src = next(p for p in logo_candidates if p.exists())
logo = Image.open(logo_src).convert("RGBA")
black_cleared = clear_near_black(logo)
flare_cleared = clear_lens_flare(logo)
dust_cleared = clear_dust_alpha(logo)
logo_out = OUT / "logo-elias-castro.png"
logo = save_cropped_rgba(logo, logo_out)
print(
    f"logo {logo_out} size={logo.size} black={black_cleared} "
    f"flare={flare_cleared} dust={dust_cleared} src={logo_src.name}"
)

# --- Headshot (Hero) ---
headshot_src = ASSETS / "Retrato_Profissional_com_Fundo_Transparente-c165b56c-b2a8-4c29-8bbe-d167cf25094b.png"
if not headshot_src.exists():
    headshot_src = next(ASSETS.glob("Retrato_Profissional_com_Fundo_Transparente*.png"))
head = Image.open(headshot_src).convert("RGBA")
clear_near_black(head, threshold=12)
head_out = OUT / "elias-castro.png"
head = save_cropped_rgba(head, head_out)
print(f"headshot {head_out} size={head.size} src={headshot_src.name}")

# --- Full body (About) ---
full_src = ASSETS / "Homem_de_terno_azul-marinho_em_fundo_transparente-9b3f845f-c4ee-40ec-8f85-224e9a79cd43.png"
full = Image.open(full_src).convert("RGBA")
clear_near_black(full, threshold=12)
full_out = OUT / "elias-castro-full.png"
full = save_cropped_rgba(full, full_out)
print(f"fullbody {full_out} size={full.size}")

# Keep legacy jpg path pointing at a solid fallback for any stale refs:
# convert headshot onto dark void for jpg consumers.
rgb = Image.new("RGB", head.size, (8, 10, 18))
rgb.paste(head, mask=head.split()[-1])
jpg_out = OUT / "elias-castro.jpg"
rgb.save(jpg_out, "JPEG", quality=92, optimize=True)
print(f"legacy jpg {jpg_out} bytes={jpg_out.stat().st_size}")
