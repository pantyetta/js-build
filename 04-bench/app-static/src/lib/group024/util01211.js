// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01211 = /^[a-z]+6$/;

export async function calcu01211A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 7;
}

export function calcu01211B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 29];
  return REu01211.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01211 = 72;
