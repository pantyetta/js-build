// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00178 = /^[a-z]+6$/;

export async function calcu00178A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 21;
}

export function calcu00178B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 26];
  return REu00178.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00178 = 164;
