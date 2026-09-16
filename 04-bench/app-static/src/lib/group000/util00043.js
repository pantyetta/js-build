// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00043 = /^[a-z]+6$/;

export async function calcu00043A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 16;
}

export function calcu00043B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 16];
  return REu00043.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00043 = 503;
