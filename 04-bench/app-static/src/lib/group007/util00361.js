// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00361 = /^[a-z]+6$/;

export async function calcu00361A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 12;
}

export function calcu00361B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 6];
  return REu00361.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00361 = 893;
