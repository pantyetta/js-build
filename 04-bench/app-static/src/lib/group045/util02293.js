// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02293 = /^[a-z]+6$/;

export async function calcu02293A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 17;
}

export function calcu02293B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 9];
  return REu02293.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02293 = 489;
