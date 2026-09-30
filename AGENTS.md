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

- `s` = `4 | 6 | 8 | 10 | 12 | 20`, `c` = `red | green | white | black | blue | yellow`, `translucent` (alias `t`) = `true | false`
- Defaults: **red, 6 sides, translucent true**; non-whitelisted/missing → default
- Translucent opacity is one shared const, `TRANSLUCENT_OPACITY = 0.87` in `settings.ts`, via `resolveOpacity(translucent)` — uniform across every die (D6 CSS gradient alpha included); `translucent=false` → 1.0
- Color palette (`COLOR_PALETTES`) drives material hex, D6 CSS gradient rgb, and label color only
- Far-side number visibility: every D4/D8/D10/D12/D20 face gets **two complementary `FrontSide` labels** — an outward one with `palette.label` (seen normally) and a duplicate flipped 180° about local Y to face inward with a white glyph (`FAR_LABEL_COLOR`). Through the die the dark outward one is back-face-culled and the inward white one shows, drawn _before_ the body (z-sort) → solid faint number at `(1−α)·|white − page|`, identical for every palette. Far labels carry **`renderOrder = -1`** (painter sort checks `renderOrder` before `z`; near-silhouette faces tie with the body's center z otherwise) and sit slightly _inside_ the body (`FACE_CENTER − 0.2` D8, `center − 0.05·n` D4/D10/D12/D20) so depth culling hides them when `translucent=false`. D6 CSS stacks labels over their own face — exempt
- Near labels in D4/D8/D10/D12/D20 carry **`renderOrder = 1`** (drawn after the body): with the default 0 they're z-sorted _before_ the translucent body whenever their world position sits behind the die center and get overdrawn to a ~13% ghost (numbers "disappearing" at oblique drag angles, reappearing past a threshold). D6 exempt

## Roll animation (`src/utils/rollAnimation.ts`)

Goal: the settle phase continues the spin's direction — never reverses — and lands on the rolled face upright.

- `easeOut` lives here and is shared with `animateTo`/`animateQuaternion` so direction sampling uses the exact trajectory the animator runs
- `planRoll(from, target, spinTurns)` — D4/D8/D10/D12/D20:
  - Settle is one fixed parent-frame axis: `â` = shortest-path axis of `fromQ⁻¹·target` (flip so `w ≥ 0`), random `ψ ∈ [0°, 180°]`, `mid = R(â, −ψ)·target`. A slerp from `mid` to `target` keeps the parent axis `â` constant for its whole run (geodesic), so `dot > 0` with `â` ⇔ never reverses
  - 40 spin candidates (turnsX 3–7 × 8 sign combos): per axis `from + dir·360·turns + wrapDegrees(mid − ·)` → `q(spun) ≡ q(mid)` (Euler ±360k ≡), ≥ 2.5 full turns so direction dominates the wrap
  - Keep candidates whose spin terminal direction (easeOut samples at t = 0.98 → 1.0) has `dot > 0` with `â`; pick randomly among matches, max-dot fallback when none
- Landing orientation (D8/D10/D12/D20) — `uprightOrientationForFace` in each dice file: settle target = minimal-arc normal→camera rotation twisted about the camera axis by `atan2(up.x, up.y)` (in-plane angle of `face.up` after the arc), twist premultiplied. The bare arc left numbers landed at ±15°/±75° (D8), −67°…+130° (D10), 0°/±31.7°/180° (D12), 0°/±15°/±20.9°/±75°/180° (D20); the twist is a post-hoc target change, so `planRoll` invariants (target-agnostic) are unaffected. D4 lands differently (rest face down, bottom-read) — see its section
- `planCssRoll(from, face, spinTurns)` — D6 (CSS `rotateX·rotateY`, easing stays cubic-bezier):
  - Settle deltas are per-axis `dir · (10°–85°)` — same sign as the spin and **< 90°**, so the `Rx(x)·ey` basis can't swing far enough to reverse the composite rotation mid-settle
  - Spin endpoint absorbs `wrapDegrees(face − base − Δ)` → `landed ≡ face (mod 360)` exactly; direction preserved because `|wrap| ≤ 180 < 1080`
  - `continueTo`/`mod360` are gone — do not reintroduce 0–360° same-sign deltas

Invariants (do not regress):

- D4/D8/D10/D12/D20 settle slerp angle ≤ π — a larger `ψ` makes THREE take the opposite shortest path (`slerp` flips on `dot < 0`)
- D4/D8/D10/D12/D20 spin must end exactly at `q(mid)` — any per-axis value not ≡ `mid (mod 360)` breaks the axis handoff
- D6 `landed ≡ face (mod 360)` — otherwise the wrong face shows; both settle deltas must stay < 90°
- D6/`planCssRoll` keep the original turn distribution: turnsX = 3 + floor(rand·5), turnsY = spinTurns − turnsX

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
- `LABEL_SIZE` (0.77): re-check fit on the shorter truncated side faces

## D12 (`src/components/Dice/TwelveSidedDice.tsx`)

Design decisions:

- Regular dodecahedron: 12 planar pentagons, no truncation/squash; circumradius 1.7 (matches the D8/D10 silhouette); 20 hard-coded vertices (φ construction × 1.7/√3), `FACES` CCW-from-outside
- `FACE_TO_NUMBER` = `[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12]` — **opposite faces sum to 13**; roll resolves `FACE_TO_NUMBER.indexOf(value)`
- First die with two-digit labels (10–12): canvas font `700 160px` on 256px, `LABEL_SIZE` 1.0 (worst-case inscribed square across all face orientations ≈ 1.195)
- Builder, material, lights, and label offsets follow D10 (auto-winding fan, baked normals + `flatShading: false`, roughness 0.4, lights 1.0, near `+0.01·n` / far `−0.05·n`)

Invariants (do not regress):

- `FACES`/`VERTICES` planarity and index consistency — non-planar edits cull triangles (holes) and swallow labels
- `FACE_BASES` length = `FACE_TO_NUMBER.length` = 12
- Two-digit labels fit the 256px canvas
- Opposite faces sum to 13

## D20 (`src/components/Dice/TwentySidedDice.tsx`)

Design decisions:

- Regular icosahedron: 20 planar triangles, circumradius 1.7 (same silhouette); 12 hard-coded vertices (φ construction × 1.7/√(1+φ²)); `FACES` = the 20 mutually-adjacent vertex triples — each edge shared by exactly two faces
- `FACE_TO_NUMBER` = `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 16, 15, 18, 17, 19, 20]` — **opposite faces sum to 21**; roll resolves `FACE_TO_NUMBER.indexOf(value)`
- `LABEL_SIZE` 0.9 (10% smaller than D12), canvas font `700 160px` — glyph-fit limit over all 20 face orientations ≈ 1.14, so 0.9 fits with margin; the transparent plane corners may overhang the triangle (painted digits stay inside, as on D8)
- Lands via the shared `uprightOrientationForFace` twist (bare arc would land `1`/`2` upside down and ten faces at ±15°/±20.9°/±75°)
- Builder, material, lights, and label offsets follow D12

Invariants (do not regress):

- `FACES`/`VERTICES` index consistency — bad edits cull triangles (holes) and swallow labels
- `FACE_BASES` length = `FACE_TO_NUMBER.length` = 20
- Two-digit labels fit the 256px canvas
- Opposite faces sum to 21

## D4 (`src/components/Dice/FourSidedDice.tsx`)

Design decisions (locked):

- Regular tetrahedron: circumradius 1.7 (same silhouette); 4 vertices `(±s, ±s, ±s)` with matching sign parity, `s = 1.7/√3 = 0.981495`; 4 triangles; **no opposite faces** (only Platonic solid without parallel pairs) → no opposite-sum convention; `FACE_TO_NUMBER` = `[1, 2, 3, 4]`
- **Bottom-read** labels: 3 per face, one at each edge midpoint, centre at `u = 0.625` (fraction centre→edge; was 0.7 — user asked to pull labels away from the edges along their centre lines); value shown = the **other face sharing that edge** — a face never shows its own value, every value printed exactly 3×; the rolled value = the resting face's number
- **Landing = rest face DOWN** (hidden, apex up — the number "sits on the table"; do NOT face the rolled camera like other dice): `restingOrientationForFace(r)` = minimal-arc `n_r → (0, −1, 0)`, then world-Y rotation by `−atan2(x, z)` of the displayed front face normal, front face = `(r + 1) % 4` (bijection → each face has exactly one display orientation)
- Result label settles at world `(0, −0.283, 0.701)` and reads upright; the other two numbers on the displayed face **radiate outward** via per-label `LABEL_BETA_DEG` (in-plane rotation about the face normal): selected positions — the edge shared with the face's own rest face, table indices 2/4/6/9 — keep β = 0° (upright), the other eight get β = 180° so the digit's top points from the face centre out through its edge midpoint. The radial rule is face-intrinsic (a property of the pane, not the view) — no screen-space solve needed
- `LABEL_SIZE` 0.8 (was 1.0 — user asked for 20% smaller, clear of the edges; edge clearance at `u = 0.625` ≈ 0.12), font `700 160px`; digit fit and far-twin containment (`pos − 0.05·n` strictly inside all 4 face planes) both verified at `u = 0.625`
- **Initial (pre-roll) pose** `INITIAL_ROTATION` = Euler XYZ `(−177.2356°, 55.25°, 45°)` — a vertex ("point") faces the viewer dead centre (≈3° off the camera axis), not identity; the mesh applies `rotationRef` on mount (also on color/opacity remount, so the pose survives a palette change)

Invariants (do not regress):

- `FACES`/`VERTICES` index consistency (winding auto-orients via geo-normal · centre dot); `LABEL_POS`/`LABEL_BETA_DEG` lengths = `FACES.length × 3`
- The mesh takes its pose from `rotationRef` on mount — never reset to identity (loses the point-facing start view; a color change would also snap the die)
- Front rule `(r + 1) % 4` must stay a bijection — one display quaternion per face, or the β table collides (β was solved per face)
- For every value: result label world x = 0 and upright, the other two displayed labels radiate (digit top outward from the face centre), front face dot-to-camera ≈ 0.943
- Each face shows only the other three values; each value appears exactly 3×
