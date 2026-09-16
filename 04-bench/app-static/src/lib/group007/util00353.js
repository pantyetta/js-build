// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00353 = /^[a-z]+6$/;

export async function calcu00353A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 3;
}

export function calcu00353B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 15];
  return REu00353.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00353 = 467;
