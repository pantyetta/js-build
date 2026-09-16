// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00891 = /^[a-z]+6$/;

export async function calcu00891A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 37;
}

export function calcu00891B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 6];
  return REu00891.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00891 = 361;
