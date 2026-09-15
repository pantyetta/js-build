// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01360 = /^[a-z]+6$/;

export async function calcu01360A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 6;
}

export function calcu01360B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 3];
  return REu01360.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01360 = 365;
