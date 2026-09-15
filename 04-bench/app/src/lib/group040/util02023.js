// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02023 = /^[a-z]+6$/;

export async function calcu02023A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 22;
}

export function calcu02023B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 5];
  return REu02023.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02023 = 58;
