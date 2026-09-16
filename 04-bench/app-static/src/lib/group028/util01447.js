// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01447 = /^[a-z]+6$/;

export async function calcu01447A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 36;
}

export function calcu01447B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 28];
  return REu01447.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01447 = 472;
