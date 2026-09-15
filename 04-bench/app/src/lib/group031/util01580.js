// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01580 = /^[a-z]+6$/;

export async function calcu01580A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 24;
}

export function calcu01580B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 7];
  return REu01580.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01580 = 846;
