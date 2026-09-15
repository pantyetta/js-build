// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02883 = /^[a-z]+6$/;

export async function calcu02883A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 9;
}

export function calcu02883B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 5];
  return REu02883.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02883 = 283;
