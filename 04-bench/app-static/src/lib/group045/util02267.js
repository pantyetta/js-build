// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02267 = /^[a-z]+6$/;

export async function calcu02267A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 12;
}

export function calcu02267B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 25];
  return REu02267.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02267 = 860;
