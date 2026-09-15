// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01864 = /^[a-z]+6$/;

export async function calcu01864A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 36;
}

export function calcu01864B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 28];
  return REu01864.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01864 = 921;
