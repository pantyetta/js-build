// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00002 = /^[a-z]+6$/;

export async function calcu00002A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 9;
}

export function calcu00002B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 11];
  return REu00002.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00002 = 768;
