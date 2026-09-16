// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02458 = /^[a-z]+6$/;

export async function calcu02458A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 20;
}

export function calcu02458B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 11];
  return REu02458.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02458 = 8;
