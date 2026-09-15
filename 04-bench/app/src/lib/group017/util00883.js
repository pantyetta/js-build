// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00883 = /^[a-z]+6$/;

export async function calcu00883A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 16;
}

export function calcu00883B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 10];
  return REu00883.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00883 = 255;
