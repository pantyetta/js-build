// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01485 = /^[a-z]+6$/;

export async function calcu01485A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 15;
}

export function calcu01485B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 26];
  return REu01485.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01485 = 393;
