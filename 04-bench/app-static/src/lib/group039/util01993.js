// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01993 = /^[a-z]+6$/;

export async function calcu01993A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 26;
}

export function calcu01993B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 11];
  return REu01993.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01993 = 650;
