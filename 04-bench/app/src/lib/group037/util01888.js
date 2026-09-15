// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01888 = /^[a-z]+6$/;

export async function calcu01888A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 3;
}

export function calcu01888B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 15];
  return REu01888.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01888 = 880;
