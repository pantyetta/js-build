// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01901 = /^[a-z]+6$/;

export async function calcu01901A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 6;
}

export function calcu01901B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 14];
  return REu01901.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01901 = 459;
