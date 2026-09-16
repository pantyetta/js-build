// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01273 = /^[a-z]+6$/;

export async function calcu01273A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 24;
}

export function calcu01273B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 23];
  return REu01273.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01273 = 614;
