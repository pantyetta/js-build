// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01521 = /^[a-z]+6$/;

export async function calcu01521A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 18;
}

export function calcu01521B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 1];
  return REu01521.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01521 = 513;
