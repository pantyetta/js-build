// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00448 = /^[a-z]+6$/;

export async function calcu00448A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 1;
}

export function calcu00448B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 16];
  return REu00448.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00448 = 917;
