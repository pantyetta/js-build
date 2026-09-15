// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01435 = /^[a-z]+6$/;

export async function calcu01435A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 5;
}

export function calcu01435B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 19];
  return REu01435.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01435 = 625;
