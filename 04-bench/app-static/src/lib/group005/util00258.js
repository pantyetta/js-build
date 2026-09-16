// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00258 = /^[a-z]+6$/;

export async function calcu00258A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 22;
}

export function calcu00258B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 15];
  return REu00258.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00258 = 3;
