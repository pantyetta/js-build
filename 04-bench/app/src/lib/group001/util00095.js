// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00095 = /^[a-z]+6$/;

export async function calcu00095A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 14;
}

export function calcu00095B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 12];
  return REu00095.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00095 = 191;
