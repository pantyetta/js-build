// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00966 = /^[a-z]+6$/;

export async function calcu00966A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 6;
}

export function calcu00966B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 10];
  return REu00966.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00966 = 710;
