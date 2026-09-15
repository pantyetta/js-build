// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00851 = /^[a-z]+6$/;

export async function calcu00851A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 17;
}

export function calcu00851B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 7];
  return REu00851.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00851 = 772;
