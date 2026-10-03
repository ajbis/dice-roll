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

- `s` = `SIDES_OPTIONS` `[4, 6, 8, 10, 12, 20]`, `c` = `COLOR_OPTIONS` `[red, yellow, green, blue, black, white]`, `translucent` (alias `t`) = `true | false`
- Keyboard (settings dialog closed): `s`/`c` advance `SIDES_OPTIONS`/`COLOR_OPTIONS` from the current value and wrap (`nextOption` in `settings.ts`; unknown value → first), `t` toggles translucency — the same exported arrays are the dialog's render order, so key order = on-screen order
- Defaults: **red, 6 sides, translucent true**; non-whitelisted/missing → default
- Translucent opacity is one shared const, `TRANSLUCENT_OPACITY = 0.87` in `settings.ts`, via `resolveOpacity(translucent)` — uniform across every die; `translucent=false` → 1.0
- Color palette (`COLOR_PALETTES`) drives material hex and label color only
- Far-side number visibility: every D4/D6/D8/D10/D12/D20 face gets **two complementary `FrontSide` labels** — an outward one with `palette.label` (seen normally) and a duplicate flipped 180° about a local axis to face inward with a white glyph (`FAR_LABEL_COLOR`; local Y in D6/D8/D10/D12/D20, and in D4 `Rz(β)·Rx` — see its section). Through the die the dark outward one is back-face-culled and the inward white one shows, drawn _before_ the body (z-sort) → solid faint number at `(1−α)·|white − page|`, identical for every palette. Far labels carry **`renderOrder = -1`** (painter sort checks `renderOrder` before `z`; near-silhouette faces tie with the body's center z otherwise) and sit slightly _inside_ the body (`FACE_CENTER − 0.2` D8, `center − 0.05·n` D4/D6/D10/D12/D20) so depth culling hides them when `translucent=false`
- Near labels in D4/D6/D8/D10/D12/D20 carry **`renderOrder = 1`** (drawn after the body): with the default 0 they're z-sorted _before_ the translucent body whenever their world position sits behind the die center and get overdrawn to a ~13% ghost (numbers "disappearing" at oblique drag angles, reappearing past a threshold)
- The scene rebuilds on color/opacity change (`useEffect` deps `[color, translucent]`) — every die must re-apply `mesh.rotation.set(rotationRef.current.x * degrees, …)` right after the mesh is created (D4/D6 pattern) so the pose survives the remount; without it the die teleports to identity while the hint still shows the rolled value

## Roll animation (`src/utils/rollAnimation.ts`)

Behaviour: the settle phase continues the spin's direction — never reverses — and lands on the rolled face upright.

- `easeOut` lives here and is shared with `animateTo`/`animateQuaternion` so direction sampling uses the exact trajectory the animator runs
- `planRoll(from, target, spinTurns)` — D4/D6/D8/D10/D12/D20:
  - Settle is one fixed parent-frame axis: `â` = shortest-path axis of `fromQ⁻¹·target` (flip so `w ≥ 0`), random `ψ ∈ [0°, 180°]`, `mid = R(â, −ψ)·target`. A slerp from `mid` to `target` keeps the parent axis `â` constant for its whole run (geodesic), so `dot > 0` with `â` ⇔ never reverses
  - 40 spin candidates (turnsX 3–7 × 8 sign combos): per axis `from + dir·360·turns + wrapDegrees(mid − ·)` → `q(spun) ≡ q(mid)` (Euler ±360k ≡), ≥ 2.5 full turns so direction dominates the wrap
  - Keep candidates whose spin terminal direction (easeOut samples at t = 0.98 → 1.0) has `dot > 0` with `â`; pick randomly among matches, max-dot fallback when none
- Landing orientation (D6/D8/D10/D12/D20) — `uprightOrientationForFace` in each dice file: settle target = minimal-arc normal→camera rotation twisted about the camera axis by `atan2(up.x, up.y)` (in-plane angle of `face.up` after the arc), twist premultiplied. The bare arc left numbers landed at ±15°/±75° (D8), −67°…+130° (D10), 0°/±31.7°/180° (D12), 0°/±15°/±20.9°/±75°/180° (D20); for D6 the twist lands every pip grid natural (6 = vertical columns, 2/3 = top-left→bottom-right). The twist is a post-hoc target change, so `planRoll` invariants (target-agnostic) are unaffected. D4 lands differently (rest face down, bottom-read) — see its section

Invariants (do not regress):

- D4/D6/D8/D10/D12/D20 settle slerp angle ≤ π — a larger `ψ` makes THREE take the opposite shortest path (`slerp` flips on `dot < 0`)
- D4/D6/D8/D10/D12/D20 spin must end exactly at `q(mid)` — any per-axis value not ≡ `mid (mod 360)` breaks the axis handoff

## Die sizing (`src/components/Dice/*.scss`)

Each `.stage--*` sets its own `--die-size` clamp — the only per-die size lever (canvas px; camera is fov 28 / z 7 for every die, so on-screen px ∝ canvas px). The shared `.three-scene { width/height: var(--die-size) }` rules live in `EightSidedDice.scss` but apply to all dice.

- Clamps: D4 `clamp(257px, 59vmin, 445px)`, D6 `clamp(204px, 48vmin, 376px)`, D8 `clamp(200px, 45.6vmin, 350px)`, D10 `clamp(214px, 47.5vmin, 376px)`, D12/D20 `clamp(180px, 42vmin, 320px)` — rest-pose bbox sqrt(area) at 1280×800 = D4 216, D6 252, D8 241, D10 241, D12 262, D20 250 (spread as built; D4/D8/D10 are the three smallest — do not equalise)
- Sizing rule: sizes are relative per die, not equal; change clamps only as a set and re-measure all six after any edit (screenshot the canvas, pixel-bbox the die against background `#292929`±14, take sqrt(area)). D12's rest bbox is 320px = its canvas width (touches the edge)

## D10 truncation (`src/components/Dice/TenSidedDice.tsx`)

Design:

- Tips sliced at `CUT_Y = POLE_Y * 0.8` (starting depth, tunable)
- Pentagon caps are **blank** and **never roll targets**
- 12 faces: 10 tip-cut side pentagons (numbered 1–10) + 2 caps (blank)
- `FACE_TO_NUMBER` maps value → face (order fixed); value 10 renders label "0"; `fetchDiceRoll(10)` unchanged
- Shape: fat silhouette (width/height ≈ 0.85), edges hard and unrounded

Invariants (do not regress):

- Geometry builder auto-orients winding via geo-normal · center dot (fixes back-face see-through) and fans n-gons (20 verts: `0–4` top cut ring, `5–9` bottom cut ring, `10–14` upper ring, `15–19` lower ring)
- Per-face baked normals + `flatShading: false` (prevents diagonal creases on multi-triangle faces)
- `computeFaceNormal` flips to outward via center dot
- `FACE_BASES` length = `FACE_TO_NUMBER.length` (numbered faces only)
- D8 lighting neutral (any color works); D10 ambient/hemi/dir all 1.0
- Side faces are planar: `RING_Y = POLE_Y × 0.105573` (kite planarity ratio); truncation preserves planarity — non-planar faces fold, cull triangles (holes), and swallow labels (measured deviation 0.357 vs 0.01 label offset)

Future tunables:

- Waistband (`RING_RADIUS` factor, currently 0.65) and kite-zigzag depth are the silhouette tunables
- `LABEL_SIZE` 0.77 — digit fit is tightest on the shorter truncated side faces (re-verify if `CUT_Y` changes)

## D12 (`src/components/Dice/TwelveSidedDice.tsx`)

Design:

- Regular dodecahedron: 12 planar pentagons, no truncation/squash; circumradius 1.7 (matches the D8/D10 silhouette); 20 hard-coded vertices (φ construction × 1.7/√3), `FACES` CCW-from-outside
- `FACE_TO_NUMBER` = `[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12]` — **opposite faces sum to 13**; roll resolves `FACE_TO_NUMBER.indexOf(value)`
- Two-digit labels (10–12): canvas font `700 160px` on 256px, `LABEL_SIZE` 1.0 (worst-case inscribed square across all face orientations ≈ 1.195)
- Builder, material, lights, and label offsets follow D10 (auto-winding fan, baked normals + `flatShading: false`, roughness 0.4, lights 1.0, near `+0.01·n` / far `−0.05·n`)

Invariants (do not regress):

- `FACES`/`VERTICES` planarity and index consistency — non-planar edits cull triangles (holes) and swallow labels
- `FACE_BASES` length = `FACE_TO_NUMBER.length` = 12
- Two-digit labels fit the 256px canvas
- Opposite faces sum to 13

## D20 (`src/components/Dice/TwentySidedDice.tsx`)

Design:

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

Design:

- Regular tetrahedron: circumradius 1.7 (same silhouette); 4 vertices `(±s, ±s, ±s)` with matching sign parity, `s = 1.7/√3 = 0.981495`; **no opposite faces** (only Platonic solid without parallel pairs) → no opposite-sum convention; `FACE_TO_NUMBER` = `[1, 2, 3, 4]`
- **Chamfered corners** (same treatment as the D6): `CORNER_CUT = 0.07` world units cut off each of the 4 vertices along its edges — same absolute cut as D6/D8 (same camera fov 28 / z 7; on-screen facet px track each die's `--die-size` — see Die sizing); built by `buildChamferedTetra` — each triangle face becomes a hexagon (2 cut points per corner), each vertex a small flat triangle, D10-style builder (auto-orient winding, fan, baked normals). Labels/roll targets stay on the original 4 face planes: the cuts only remove corner slivers, the hexagon is symmetric about the original centroid, and face normals/centres are unchanged (`FACE_GEOM` still derived from `FACES`/`VERTICES`)
- **Bottom-read** labels: 3 per face, one at each edge midpoint, centre at `u = 0.625` (fraction centre→edge, clear of the edges along their centre lines); value shown = the **other face sharing that edge** — a face never shows its own value, every value printed exactly 3×; the rolled value = the resting face's number
- **Landing = rest face DOWN** (hidden, apex up — the number "sits on the table"; do NOT face the rolled camera like other dice): `restingOrientationForFace(r)` = minimal-arc `n_r → (0, −1, 0)`, then world-Y rotation by `−atan2(x, z)` of the displayed front face normal, front face = `(r + 1) % 4` (bijection → each face has exactly one display orientation)
- Result label settles at world `(0, −0.283, 0.701)` and reads upright. **Near labels use only the natural basis** (local up = face centre − edge midpoint, no per-label β): digits are edge-aligned with their top toward the face centre — bottom-read — so the result lands upright and the other two numbers on the displayed face stay upside down. **Far twins** (through-body copies) apply the `LABEL_BETA_DEG` table (β = 0° at result positions 2/4/6/9, 180° elsewhere) then flip in-plane about local **X** (`far = orientation·Rz(β)·Rx(π)`) — at settle the rolled value's through-body side copies read upright. Orientation is face-intrinsic (a property of the pane, not the view) — no screen-space solve
- `LABEL_SIZE` 0.8 (clear of the edges; edge clearance at `u = 0.625` ≈ 0.12), font `700 160px`; digit fit and far-twin containment both verified at `u = 0.625` — near digits ≥ 0.18 (glyph radius) from every hexagon edge (min 0.30), far digits (flat disc on the `pos − 0.05·n` plane) inside all 8 chamfer planes (own plane −0.05, cut planes ≥ −1.06)
- **Initial (pre-roll) pose** `INITIAL_ROTATION` = Euler XYZ `(−177.2356°, 55.25°, 45°)` — a vertex ("point") faces the viewer dead centre (≈3° off the camera axis), not identity; the mesh applies `rotationRef` on mount (also on color/opacity remount, so the pose survives a palette change)

Invariants (do not regress):

- `FACES`/`VERTICES` index consistency (winding auto-orients via geo-normal · centre dot); `LABEL_POS`/`LABEL_BETA_DEG` lengths = `FACES.length × 3`
- `CHAMFER_FACES` = 4 hexagons + 4 corner triangles, hexagons exactly coplanar with their original face (labels/centres/landing math unchanged); labels and roll targets index only the 4 hexagon faces — corner triangles are never labelled or landed
- The mesh takes its pose from `rotationRef` on mount — never reset to identity (loses the point-facing start view; a color change would also snap the die)
- Front rule `(r + 1) % 4` must stay a bijection — one display quaternion per face, or the label index mapping (pos + far-β) collides
- For every value: result label world x = 0 and upright, the other two displayed labels keep the natural basis (digit top toward the face centre — upside down at settle), front face dot-to-camera ≈ 0.943; every far twin = (near orientation)·Rz(β)·Rx(π)
- Each face shows only the other three values; each value appears exactly 3×

## D6 (`src/components/Dice/SixSidedDice.tsx`)

Design:

- **Chamfered cube** (faceted corners, no curves): `CORNER_CUT = 0.07` world units cut off each of the 8 vertices along its edges (side = 2 → ~9px triangle legs at final size), built by `buildChamferedCube` — each square face becomes an octagon (2 cut points per corner), each vertex becomes a small flat triangle; D10-style builder (auto-orient winding via geo-normal · centre dot, fan n-gons, per-face baked normals + `flatShading: false`). Silhouette extremes stay at edge midpoints → landed bbox unaffected by the cut; `CORNER_CUT` is the tunable (chop deeper = cuboctahedron territory; 0 keeps the plain cube)
- **Pips, not digits**: 512px canvas, 12% inset, 3×3 cells, pip radius `0.055733 × size`, grid centres `[0.246667, 0.5, 0.753333]` of the plane; colour `palette.label` (far twins white)
- Value → face (index = value − 1): `1 +Z front, 2 +Y top, 3 +X right, 4 −X left, 5 −Y bottom, 6 −Z back` — opposite pairs 1-6 / 2-5 / 3-4 (classic d6); identity pose shows 1 front / 2 top / 3 right
- **Size**: canvas `--die-size: clamp(204px, 48vmin, 376px)` (fov 28, z 7, cube side 2) — measured red-bbox 252×252 @ (514,241) at 1280×800, identical for every landed value
- Labels: near plane `2 × 2` at `n · 1.01` (`renderOrder = 1`), far plane `1.9 × 1.9` at `n · 0.95`, flipped π about local Y, white, `renderOrder = -1` — far corners `(0.95, 0.95, 0.95)` strictly inside the chamfered solid (corner sum 2.85 ≤ 3 − `CORNER_CUT`, holds for any cut ≤ 0.15) so depth culling hides them when `translucent=false`
- Rolls use the shared path: `planRoll` (SPIN_TURNS 10), `uprightOrientationForFace` twist → pips land natural (6 = vertical columns, 2/3 = top-left→bottom-right), 1500/750/260 ms, drag threshold 0.5 measured on the stage (same as the other dice)
- The mesh applies `rotationRef` on mount (D4 pattern) — a color/opacity remount keeps the landed pose
- Material/lights follow D10 (roughness 0.4, metalness 0, `flatShading: false`, ambient/hemi/dir 1.0); `Dice.scss` only holds the shared `.stage`/`.hint` base

Invariants (do not regress):

- `CHAMFER_FACES` = 6 octagons + 8 corner triangles; winding must stay auto-oriented (a bad flip = back-face see-through holes); `FACE_NORMALS`/`PIPS` lengths = 6 — labels and roll targets index only the 6 octagon faces (corner triangles are never labelled or landed)
- Every value's pips land screen-natural after the twist
- Identity pose shows 1 front / 2 top / 3 right; opposite faces sum to 7
- Far-twin containment: plane half-size 0.95 and offset 0.95 both < 1, and corner sum 2.85 ≤ 3 − `CORNER_CUT` (cut ≤ 0.15)
- Near labels `renderOrder = 1`, far `= -1` (shared bullets) — otherwise pips vanish at oblique drag angles / far twins bleed through in opaque mode
- Pose survives color/opacity remount (`rotationRef` applied when the mesh is created)

## D8 (`src/components/Dice/EightSidedDice.tsx`)

Design:

- **Chamfered octahedron**: `CORNER_CUT = 0.07` world units cut off each of the 6 vertices along its edges (same cut and camera as D4/D6 — shared world constant; on-screen facet px track each die's `--die-size`), built by `buildChamferedOcta` — each triangle face becomes a hexagon (2 cut points per corner), each vertex a flat quadrilateral (degree 4; cut points sorted cyclically around the vertex axis so the fan is non-crossing); D10-style builder (auto-orient winding via geo-normal · centre dot, fan, baked normals). Labels/roll targets stay on the original 8 face planes — `FACE_BASES`/`FACE_CENTER` untouched; the hexagon is symmetric about the original centroid
- Regular octahedron: circumradius 1.7 (`OCTA_RADIUS`), axis-aligned vertices; `FACES` derived from `FACE_NORMALS` octants (sign-matched axis intercepts), so value → `FACE_BASES[value − 1]`
- Labels: face-centre-mounted at `n · 1.08` (`FACE_CENTER`, floats ~0.10 above the face plane), far twins white at `n · 0.88` (`FACE_CENTER − 0.2`), font `700 200px` with a soft shadow, `LABEL_SIZE` 0.864, `renderOrder` 1 / −1 (shared bullets)
- Material: `flatShading: true`, roughness 0.46, metalness 0.08 — D8's own look (flat shading uses the derivative normal in the fragment shader; the builder still bakes per-face normals)
- Rolls/landing: shared `planRoll` (SPIN_TURNS 10) + `uprightOrientationForFace` twist → face-on landing with the number centred, 1500/750/260 ms, drag threshold 0.5 on the stage

Invariants (do not regress):

- `CHAMFER_FACES` = 8 hexagons + 6 quads; hexagons coplanar with their original face planes (verified to 1e-16), quads exactly planar; winding auto-oriented (a bad flip = back-face see-through holes); labels and roll targets index only the 8 hexagon faces — corner quads are never labelled or landed
- `FACE_BASES` length = 8; every value lands face-on with its number centred
- Far-twin containment: the digit disc (~0.34 radius) on the `n · 0.88` plane stays inside all 14 chamfer planes (worst margin −0.10, its own face plane); the whole far plane's corners stay inside the 6 corner quads (worst −0.66) — depth culling hides far twins when `translucent=false`
- Near-digit clearance: face inradius 0.694 ≥ 0.34 digit radius from every hexagon edge (labels are centre-mounted, far from the cuts)
- Size at 1280×800: identity bbox 334×334 @ (473,200), landed 278×280 (279 for values 5–8), two y-groups: values 1–4 @ 209, 5–8 @ 246; silhouette vertex facets ≈ 10px (cut 0.07 × √2 at the on-screen scale)
