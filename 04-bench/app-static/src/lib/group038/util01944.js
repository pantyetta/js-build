// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01944 = /^[a-z]+6$/;

export async function calcu01944A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 5;
}

export function calcu01944B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 12];
  return REu01944.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01944 = 864;
