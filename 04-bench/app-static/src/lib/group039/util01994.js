// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01994 = /^[a-z]+6$/;

export async function calcu01994A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 8;
}

export function calcu01994B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 8];
  return REu01994.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01994 = 639;
