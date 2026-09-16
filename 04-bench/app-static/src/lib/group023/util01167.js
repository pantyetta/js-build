// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01167 = /^[a-z]+6$/;

export async function calcu01167A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 26;
}

export function calcu01167B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 12];
  return REu01167.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01167 = 342;
