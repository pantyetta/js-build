// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01294 = /^[a-z]+6$/;

export async function calcu01294A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 17;
}

export function calcu01294B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 16];
  return REu01294.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01294 = 660;
