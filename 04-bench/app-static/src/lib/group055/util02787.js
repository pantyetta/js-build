// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02787 = /^[a-z]+6$/;

export async function calcu02787A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 35;
}

export function calcu02787B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 27];
  return REu02787.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02787 = 300;
