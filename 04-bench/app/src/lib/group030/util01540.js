// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01540 = /^[a-z]+6$/;

export async function calcu01540A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 11;
}

export function calcu01540B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 13];
  return REu01540.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01540 = 603;
