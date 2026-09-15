// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00602 = /^[a-z]+6$/;

export async function calcu00602A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 4;
}

export function calcu00602B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 5];
  return REu00602.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00602 = 895;
