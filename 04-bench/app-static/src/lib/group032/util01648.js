// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01648 = /^[a-z]+6$/;

export async function calcu01648A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 1;
}

export function calcu01648B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 24];
  return REu01648.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01648 = 658;
