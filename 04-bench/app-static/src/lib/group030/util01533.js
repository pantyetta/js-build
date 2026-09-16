// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01533 = /^[a-z]+6$/;

export async function calcu01533A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 29;
}

export function calcu01533B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 20];
  return REu01533.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01533 = 85;
