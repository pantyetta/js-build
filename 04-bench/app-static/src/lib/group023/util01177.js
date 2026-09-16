// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01177 = /^[a-z]+6$/;

export async function calcu01177A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 31;
}

export function calcu01177B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 21];
  return REu01177.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01177 = 540;
