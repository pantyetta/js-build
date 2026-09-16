// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02761 = /^[a-z]+6$/;

export async function calcu02761A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 8;
}

export function calcu02761B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 4];
  return REu02761.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02761 = 11;
