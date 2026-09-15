// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00550 = /^[a-z]+6$/;

export async function calcu00550A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 19;
}

export function calcu00550B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 20];
  return REu00550.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00550 = 778;
