# AGENTS.md

## Commands

- `yarn dev` / `yarn start` — dev server
- `yarn build` — production build → `dist/` (gitignored, not committed)
- `yarn build:docs` — production build → `docs/` (committed; GitHub Pages source, `base: './'` in vite.config)
- `yarn typecheck` — `tsc -b`
- `yarn lint` / `yarn lint:styles` — eslint / stylelint
- `yarn format` — prettier

## Git

- No global gitconfig on this machine — set identity per-commit (do not write git config):
  `git -c user.name='ajbis' -c user.email='1932972+ajbis@users.noreply.github.com' commit ...`
  (matches all existing commit authors)

## Settings query strings (`src/utils/settings.ts`)

- `s` = `6 | 8 | 10`, `c` = `red | green | white`, `translucent` (alias `t`) = `true | false`
- Defaults: **red, 6 sides, translucent true**; non-whitelisted/missing → default
- Opacity is keyed by **sides**, not color: 6 → 0.85, 8 → 0.8, 10 → 0.9; `translucent=false` → 1.0
- Color palette (`COLOR_PALETTES`) drives material hex, D6 CSS gradient rgb, and label color only

## D10 truncation (`src/components/Dice/TenSidedDice.tsx`)

Design decisions (locked):

- Tips sliced at `CUT_Y = POLE_Y * 0.8` (starting depth, subtle/real-d10-like; tunable)
- Pentagon caps are **blank** and **never roll targets**
- 12 faces: 10 tip-cut side pentagons (numbered 1–10) + 2 caps (blank)
- `FACE_TO_NUMBER` order preserved from the pointed version; value 10 renders label "0"; `fetchDiceRoll(10)` unchanged
- Shape reference: milky white d10 photo — **shape only** (fat, width/height ≈ 0.85); ignore the photo's tumbled/rounded edges and number styling

Invariants (do not regress):

- Geometry builder auto-orients winding via geo-normal · center dot (fixes back-face see-through) and fans n-gons (20 verts: `0–4` top cut ring, `5–9` bottom cut ring, `10–14` upper ring, `15–19` lower ring)
- Per-face baked normals + `flatShading: false` (prevents diagonal creases on multi-triangle faces)
- `computeFaceNormal` flips to outward via center dot
- `FACE_BASES` length = `FACE_TO_NUMBER.length` (numbered faces only)
- D8 lighting neutral (any color works); D10 ambient/hemi/dir all 1.0
- Side faces are planar: `RING_Y = POLE_Y × 0.105573` (kite planarity ratio); truncation preserves planarity — non-planar faces fold, cull triangles (holes), and swallow labels (deviation was 0.357 vs 0.01 label offset)

Future tunables:

- Waistband (`RING_RADIUS` factor, currently 0.65) and shallower kite zigzag — only if silhouette still misses the reference after the cut
- `LABEL_SIZE` (0.7): re-check fit on the shorter truncated side faces
