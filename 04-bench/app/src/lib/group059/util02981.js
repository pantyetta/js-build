// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02981 = /^[a-z]+6$/;

export async function calcu02981A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 26;
}

export function calcu02981B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 16];
  return REu02981.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02981 = 768;
