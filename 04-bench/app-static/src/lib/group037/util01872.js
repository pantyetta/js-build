// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01872 = /^[a-z]+6$/;

export async function calcu01872A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 3;
}

export function calcu01872B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 13];
  return REu01872.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01872 = 997;
