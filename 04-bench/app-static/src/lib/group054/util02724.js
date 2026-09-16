// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02724 = /^[a-z]+6$/;

export async function calcu02724A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 10;
}

export function calcu02724B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 16];
  return REu02724.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02724 = 844;
