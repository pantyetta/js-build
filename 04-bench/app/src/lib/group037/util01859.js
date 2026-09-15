// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01859 = /^[a-z]+6$/;

export async function calcu01859A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 33;
}

export function calcu01859B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 23];
  return REu01859.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01859 = 369;
