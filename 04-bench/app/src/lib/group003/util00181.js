// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00181 = /^[a-z]+6$/;

export async function calcu00181A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 30;
}

export function calcu00181B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 19];
  return REu00181.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00181 = 656;
