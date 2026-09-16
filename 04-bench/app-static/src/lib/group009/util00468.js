// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00468 = /^[a-z]+6$/;

export async function calcu00468A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 3;
}

export function calcu00468B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 15];
  return REu00468.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00468 = 478;
