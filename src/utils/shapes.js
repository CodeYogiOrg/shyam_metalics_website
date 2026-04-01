// 4 Futuristic Chrome Shapes — Pure Silver White
// 1. Chain Knot  2. 3D Gear  3. Infinity  4. Chrome Helix

const SEGMENTS_H = 80;
const SEGMENTS_V = 48;
const TWO_PI = Math.PI * 2;
const PI = Math.PI;

function spow(val, exp) {
  return Math.sign(val) * Math.pow(Math.abs(val), exp);
}

// ─────────────────────────────────────────────────────────────
// 1. CHAIN KNOT (Trefoil Knot)
//    Smooth (2,3) torus knot — interlocking chain-link feel
//    Frenet-frame tube for perfect circular cross-section
// ─────────────────────────────────────────────────────────────
function chainKnot(u, v) {
  const p = 2, q = 3;
  const R = 0.9, rk = 0.45, tubeR = 0.22;

  const t = u * TWO_PI;
  const phi = v * TWO_PI;

  const cpt = Math.cos(p * t), spt = Math.sin(p * t);
  const cqt = Math.cos(q * t), sqt = Math.sin(q * t);

  // Centerline
  const cx = cpt * (R + rk * cqt);
  const cy = spt * (R + rk * cqt);
  const cz = rk * sqt;

  // Analytical tangent
  let tx = -p * spt * (R + rk * cqt) - rk * q * sqt * cpt;
  let ty = p * cpt * (R + rk * cqt) - rk * q * sqt * spt;
  let tz = rk * q * cqt;
  const tLen = Math.sqrt(tx * tx + ty * ty + tz * tz);
  tx /= tLen; ty /= tLen; tz /= tLen;

  // Normal via torus-outward projection (smooth, non-twisting)
  let nx = cpt, ny = spt, nz = 0;
  const dot = nx * tx + ny * ty + nz * tz;
  nx -= dot * tx; ny -= dot * ty; nz -= dot * tz;
  const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
  nx /= nLen; ny /= nLen; nz /= nLen;

  // Binormal = tangent x normal
  const bx = ty * nz - tz * ny;
  const by = tz * nx - tx * nz;
  const bz = tx * ny - ty * nx;

  const cp2 = Math.cos(phi), sp2 = Math.sin(phi);
  return [
    cx + tubeR * (cp2 * nx + sp2 * bx),
    cy + tubeR * (cp2 * ny + sp2 * by),
    cz + tubeR * (cp2 * nz + sp2 * bz),
  ];
}

// ─────────────────────────────────────────────────────────────
// 2. 3D GEAR
//    Thick industrial gear with 12 smooth teeth
//    Rotates 360° slowly via the animation loop
// ─────────────────────────────────────────────────────────────
function gear3D(u, v) {
  const theta = u * TWO_PI;
  const phi = v * PI;
  const sp = Math.sin(phi);
  const cp = Math.cos(phi);

  const teeth = 12;
  const baseR = 0.85;
  const toothH = 0.4;

  // Smooth tooth profile: sharp top, smooth valleys
  const toothWave = Math.cos(teeth * theta);
  const toothProfile = Math.pow(Math.max(toothWave, 0), 0.55) * toothH;

  // Hub hole effect — slight indent at center
  const hubIndent = 0.08 * Math.pow(Math.max(Math.abs(cp) - 0.7, 0) / 0.3, 2);

  const R = baseR + toothProfile - hubIndent;

  // Thick gear body — flat top and bottom
  const halfH = 0.45;
  const nH = 0.2;

  const horizScale = spow(sp, nH);
  return [
    -R * horizScale * Math.cos(theta),
    R * horizScale * Math.sin(theta),
    halfH * spow(cp, nH),
  ];
}

// ─────────────────────────────────────────────────────────────
// 3. FUTURISTIC 3D INFINITY SHAPE
//    Lemniscate (figure-8) curve with 3D vertical twist
//    and smooth tube — fully 3D from every angle
// ─────────────────────────────────────────────────────────────
function infinityShape(u, v) {
  const t = u * TWO_PI;
  const phi = v * TWO_PI;

  const a = 1.2;
  const verticalTwist = 0.35; // how much the loops tilt out of plane
  const tubeR = 0.22;

  const st = Math.sin(t);
  const ct = Math.cos(t);
  const denom = 1 + st * st;

  // Lemniscate centerline with 3D twist
  const cx = a * ct / denom;
  const cy = a * verticalTwist * st / denom;
  const cz = a * st * ct / denom;

  // Tangent via analytical derivative
  const dd = -2 * st * ct; // derivative of denom
  const dcx = (-a * st * denom - a * ct * dd) / (denom * denom);
  const dcy = (a * verticalTwist * ct * denom - a * verticalTwist * st * dd) / (denom * denom);
  const dcz = (a * (ct * ct - st * st) * denom - a * st * ct * dd) / (denom * denom);

  let tx = dcx, ty = dcy, tz = dcz;
  const tLen = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
  tx /= tLen; ty /= tLen; tz /= tLen;

  // Normal via up-vector projection
  let nx = 0, ny = 1, nz = 0;
  let dot = nx * tx + ny * ty + nz * tz;
  nx -= dot * tx; ny -= dot * ty; nz -= dot * tz;
  let nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
  if (nLen < 0.01) {
    nx = 0; ny = 0; nz = 1;
    dot = nx * tx + ny * ty + nz * tz;
    nx -= dot * tx; ny -= dot * ty; nz -= dot * tz;
    nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
  }
  nx /= nLen; ny /= nLen; nz /= nLen;

  // Binormal
  const bx = ty * nz - tz * ny;
  const by = tz * nx - tx * nz;
  const bz = tx * ny - ty * nx;

  const cp2 = Math.cos(phi), sp2 = Math.sin(phi);
  return [
    cx + tubeR * (cp2 * nx + sp2 * bx),
    cz + tubeR * (cp2 * nz + sp2 * bz),
    cy + tubeR * (cp2 * ny + sp2 * by),
  ];
}

// ─────────────────────────────────────────────────────────────
// 4. CHROME HELIX (Spring Coil)
//    Smooth metallic spring — 4 coils with thick tube
//    Frenet-frame tube extrusion along helical path
// ─────────────────────────────────────────────────────────────
function chromeHelix(u, v) {
  const coils = 4;
  const helixR = 0.7;
  const helixH = 1.8;
  const tubeR = 0.2;

  const t = u * TWO_PI * coils;
  const phi = v * TWO_PI;

  const cx = helixR * Math.cos(t);
  const cy = (u - 0.5) * helixH;
  const cz = helixR * Math.sin(t);

  let tx = -helixR * coils * TWO_PI * Math.sin(t);
  let ty = helixH;
  let tz = helixR * coils * TWO_PI * Math.cos(t);
  const tLen = Math.sqrt(tx * tx + ty * ty + tz * tz);
  tx /= tLen; ty /= tLen; tz /= tLen;

  let nx = Math.cos(t);
  let ny = 0;
  let nz = Math.sin(t);
  const dot = nx * tx + ny * ty + nz * tz;
  nx -= dot * tx; ny -= dot * ty; nz -= dot * tz;
  const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
  nx /= nLen; ny /= nLen; nz /= nLen;

  const bx = ty * nz - tz * ny;
  const by = tz * nx - tx * nz;
  const bz = tx * ny - ty * nx;

  const cp2 = Math.cos(phi), sp2 = Math.sin(phi);
  return [
    cx + tubeR * (cp2 * nx + sp2 * bx),
    cy + tubeR * (cp2 * ny + sp2 * by),
    cz + tubeR * (cp2 * nz + sp2 * bz),
  ];
}

// ─────────────────────────────────────────────────────────────
// MORPH TARGET GENERATOR
// ─────────────────────────────────────────────────────────────
export function generateMorphTargets() {
  const vertexCount = (SEGMENTS_H + 1) * (SEGMENTS_V + 1);

  const shapeFunctions = [
    chainKnot,            // 1. Chain knot (trefoil knot)
    gear3D,               // 2. 3D Gear (slow 360° rotation)
    infinityShape,        // 3. Futuristic 3D Infinity
    chromeHelix,          // 4. Chrome helix spring coil
  ];

  const targets = shapeFunctions.map((shapeFn) => {
    const positions = new Float32Array(vertexCount * 3);
    let idx = 0;

    for (let iy = 0; iy <= SEGMENTS_V; iy++) {
      const v = iy / SEGMENTS_V;
      for (let ix = 0; ix <= SEGMENTS_H; ix++) {
        const u = ix / SEGMENTS_H;
        const [x, y, z] = shapeFn(u, v);
        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = z;
        idx += 3;
      }
    }

    return positions;
  });

  return { targets, vertexCount };
}

export { SEGMENTS_H, SEGMENTS_V };
