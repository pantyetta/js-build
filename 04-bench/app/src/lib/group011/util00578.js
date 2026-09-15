// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00578 = /^[a-z]+6$/;

export async function calcu00578A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 19;
}

export function calcu00578B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 23];
  return REu00578.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00578 = 991;
