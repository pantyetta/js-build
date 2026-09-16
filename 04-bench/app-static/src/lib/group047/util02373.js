// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02373 = /^[a-z]+6$/;

export async function calcu02373A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 10;
}

export function calcu02373B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 7];
  return REu02373.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02373 = 951;
