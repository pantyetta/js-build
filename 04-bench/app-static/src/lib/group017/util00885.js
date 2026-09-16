// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00885 = /^[a-z]+6$/;

export async function calcu00885A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 6;
}

export function calcu00885B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 28];
  return REu00885.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00885 = 779;
