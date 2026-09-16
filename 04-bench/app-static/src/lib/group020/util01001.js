// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01001 = /^[a-z]+6$/;

export async function calcu01001A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 11;
}

export function calcu01001B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 14];
  return REu01001.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01001 = 725;
