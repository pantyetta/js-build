// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01835 = /^[a-z]+6$/;

export async function calcu01835A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 29;
}

export function calcu01835B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 12];
  return REu01835.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01835 = 542;
