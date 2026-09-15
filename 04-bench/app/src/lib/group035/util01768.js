// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01768 = /^[a-z]+6$/;

export async function calcu01768A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 14;
}

export function calcu01768B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 26];
  return REu01768.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01768 = 908;
