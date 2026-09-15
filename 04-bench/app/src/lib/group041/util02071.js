// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02071 = /^[a-z]+6$/;

export async function calcu02071A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 3;
}

export function calcu02071B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 26];
  return REu02071.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02071 = 750;
