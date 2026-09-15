// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00559 = /^[a-z]+6$/;

export async function calcu00559A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 20;
}

export function calcu00559B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 18];
  return REu00559.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00559 = 489;
