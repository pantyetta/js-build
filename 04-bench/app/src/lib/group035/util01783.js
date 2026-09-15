// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01783 = /^[a-z]+6$/;

export async function calcu01783A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 33;
}

export function calcu01783B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 29];
  return REu01783.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01783 = 7;
