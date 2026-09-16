// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00175 = /^[a-z]+6$/;

export async function calcu00175A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 6;
}

export function calcu00175B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 16];
  return REu00175.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00175 = 67;
