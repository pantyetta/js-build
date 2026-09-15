// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00603 = /^[a-z]+6$/;

export async function calcu00603A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 16;
}

export function calcu00603B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 6];
  return REu00603.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00603 = 425;
