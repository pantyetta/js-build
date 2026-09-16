// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01631 = /^[a-z]+6$/;

export async function calcu01631A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 35;
}

export function calcu01631B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 28];
  return REu01631.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01631 = 349;
