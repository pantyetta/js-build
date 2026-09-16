// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00787 = /^[a-z]+6$/;

export async function calcu00787A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 13;
}

export function calcu00787B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 26];
  return REu00787.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00787 = 773;
