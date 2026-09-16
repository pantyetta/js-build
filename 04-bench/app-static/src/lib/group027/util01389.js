// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01389 = /^[a-z]+6$/;

export async function calcu01389A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 34;
}

export function calcu01389B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 4];
  return REu01389.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01389 = 774;
