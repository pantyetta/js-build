// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01722 = /^[a-z]+6$/;

export async function calcu01722A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 29;
}

export function calcu01722B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 10];
  return REu01722.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01722 = 28;
