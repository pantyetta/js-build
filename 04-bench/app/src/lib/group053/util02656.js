// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02656 = /^[a-z]+6$/;

export async function calcu02656A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 30;
}

export function calcu02656B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 4];
  return REu02656.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02656 = 386;
