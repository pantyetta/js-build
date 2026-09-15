// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01269 = /^[a-z]+6$/;

export async function calcu01269A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 28;
}

export function calcu01269B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 27];
  return REu01269.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01269 = 640;
