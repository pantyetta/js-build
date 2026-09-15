// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02885 = /^[a-z]+6$/;

export async function calcu02885A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 28;
}

export function calcu02885B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 10];
  return REu02885.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02885 = 447;
