// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01711 = /^[a-z]+6$/;

export async function calcu01711A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 21;
}

export function calcu01711B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 12];
  return REu01711.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01711 = 219;
