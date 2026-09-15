// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02057 = /^[a-z]+6$/;

export async function calcu02057A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 28;
}

export function calcu02057B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 15];
  return REu02057.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02057 = 267;
