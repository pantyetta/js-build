// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02077 = /^[a-z]+6$/;

export async function calcu02077A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 12;
}

export function calcu02077B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 26];
  return REu02077.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02077 = 230;
