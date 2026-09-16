// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01684 = /^[a-z]+6$/;

export async function calcu01684A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 28;
}

export function calcu01684B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 4];
  return REu01684.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01684 = 130;
