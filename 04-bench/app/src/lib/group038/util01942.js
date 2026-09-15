// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01942 = /^[a-z]+6$/;

export async function calcu01942A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 19;
}

export function calcu01942B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 25];
  return REu01942.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01942 = 592;
