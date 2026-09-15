// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01361 = /^[a-z]+6$/;

export async function calcu01361A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 33;
}

export function calcu01361B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 1];
  return REu01361.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01361 = 802;
