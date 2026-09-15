// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01023 = /^[a-z]+6$/;

export async function calcu01023A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 31;
}

export function calcu01023B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 16];
  return REu01023.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01023 = 319;
