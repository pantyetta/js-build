// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01685 = /^[a-z]+6$/;

export async function calcu01685A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 20;
}

export function calcu01685B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 8];
  return REu01685.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01685 = 153;
