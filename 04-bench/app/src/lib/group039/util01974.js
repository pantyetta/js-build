// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01974 = /^[a-z]+6$/;

export async function calcu01974A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 32;
}

export function calcu01974B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 9];
  return REu01974.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01974 = 780;
