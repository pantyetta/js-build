// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01668 = /^[a-z]+6$/;

export async function calcu01668A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 20;
}

export function calcu01668B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 9];
  return REu01668.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01668 = 638;
