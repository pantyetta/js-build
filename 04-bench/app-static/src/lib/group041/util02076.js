// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02076 = /^[a-z]+6$/;

export async function calcu02076A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 35;
}

export function calcu02076B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 10];
  return REu02076.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02076 = 821;
