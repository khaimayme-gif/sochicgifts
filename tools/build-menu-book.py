#!/usr/bin/env python3
"""Turn a menu PDF (exported from Canva) into the page images the menu book viewer shows.

    python3 tools/build-menu-book.py "~/Downloads/So Chic Gifts Menu.pdf" thailand

Writes images/menu-book/<name>/:
    page-01.webp ...  each page, 1600px wide (sharp when zoomed on a phone)
    thumb-01.webp ... small thumbnails for the page strip
    pages.json        page count and shape, read by menu.html

Canva PDFs are huge (the Thailand menu is 218 MB) because every page carries the full-size
background image; the rendered pages come to a few MB in total.

Needs PyMuPDF and Pillow:  python3 -m pip install pymupdf pillow
"""
import io
import json
import os
import shutil
import sys

import fitz  # PyMuPDF
from PIL import Image

PAGE_WIDTH = 1600
THUMB_WIDTH = 160
QUALITY = 80


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    pdf_path, name = os.path.expanduser(sys.argv[1]), sys.argv[2]
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, 'images', 'menu-book', name)
    if os.path.isdir(out):
        shutil.rmtree(out)  # a new export may have fewer pages
    os.makedirs(out)

    doc = fitz.open(pdf_path)
    first = doc[0].rect
    total = 0
    for i, page in enumerate(doc, start=1):
        scale = PAGE_WIDTH / page.rect.width
        pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
        img = Image.open(io.BytesIO(pix.tobytes('png')))
        img.save(os.path.join(out, f'page-{i:02d}.webp'), 'WEBP', quality=QUALITY, method=6)
        thumb = img.resize((THUMB_WIDTH, round(img.height * THUMB_WIDTH / img.width)), Image.LANCZOS)
        thumb.save(os.path.join(out, f'thumb-{i:02d}.webp'), 'WEBP', quality=75, method=6)
        size = os.path.getsize(os.path.join(out, f'page-{i:02d}.webp'))
        total += size
        print(f'  page {i:2d}: {size / 1024:6.0f} KB')

    with open(os.path.join(out, 'pages.json'), 'w') as f:
        json.dump({'pages': doc.page_count, 'width': round(first.width), 'height': round(first.height)}, f)
    print(f'{doc.page_count} pages, {total / 1048576:.1f} MB -> {os.path.relpath(out, root)}/')


if __name__ == '__main__':
    main()
