// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01877 = /^[a-z]+6$/;

export async function calcu01877A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 16;
}

export function calcu01877B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 20];
  return REu01877.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01877 = 49;
