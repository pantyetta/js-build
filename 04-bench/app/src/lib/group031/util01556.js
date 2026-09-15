// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01556 = /^[a-z]+6$/;

export async function calcu01556A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 18;
}

export function calcu01556B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 11];
  return REu01556.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01556 = 924;
