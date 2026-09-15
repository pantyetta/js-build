// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00823 = /^[a-z]+6$/;

export async function calcu00823A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 6;
}

export function calcu00823B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 1];
  return REu00823.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00823 = 776;
