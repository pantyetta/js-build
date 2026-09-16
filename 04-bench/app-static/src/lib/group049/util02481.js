// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02481 = /^[a-z]+6$/;

export async function calcu02481A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 2;
}

export function calcu02481B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 22];
  return REu02481.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02481 = 78;
