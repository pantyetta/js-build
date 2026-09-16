// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01189 = /^[a-z]+6$/;

export async function calcu01189A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 12;
}

export function calcu01189B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 12];
  return REu01189.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01189 = 959;
