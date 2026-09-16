// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01758 = /^[a-z]+6$/;

export async function calcu01758A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 13;
}

export function calcu01758B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 21];
  return REu01758.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01758 = 429;
