// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01249 = /^[a-z]+6$/;

export async function calcu01249A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 10;
}

export function calcu01249B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 24];
  return REu01249.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01249 = 658;
