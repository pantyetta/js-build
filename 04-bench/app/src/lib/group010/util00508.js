// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00508 = /^[a-z]+6$/;

export async function calcu00508A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 18;
}

export function calcu00508B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 26];
  return REu00508.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00508 = 181;
