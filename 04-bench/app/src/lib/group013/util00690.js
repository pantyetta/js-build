// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00690 = /^[a-z]+6$/;

export async function calcu00690A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 25;
}

export function calcu00690B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 9];
  return REu00690.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00690 = 189;
