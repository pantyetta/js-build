// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01239 = /^[a-z]+6$/;

export async function calcu01239A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 33;
}

export function calcu01239B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 15];
  return REu01239.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01239 = 832;
