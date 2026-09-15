// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00620 = /^[a-z]+6$/;

export async function calcu00620A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 15;
}

export function calcu00620B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 6];
  return REu00620.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00620 = 749;
