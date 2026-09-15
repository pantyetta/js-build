// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02167 = /^[a-z]+6$/;

export async function calcu02167A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 7;
}

export function calcu02167B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 8];
  return REu02167.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02167 = 236;
