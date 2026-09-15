// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01694 = /^[a-z]+6$/;

export async function calcu01694A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 3;
}

export function calcu01694B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 20];
  return REu01694.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01694 = 863;
