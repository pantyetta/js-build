// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02975 = /^[a-z]+6$/;

export async function calcu02975A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 13;
}

export function calcu02975B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 26];
  return REu02975.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02975 = 265;
