// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02733 = /^[a-z]+6$/;

export async function calcu02733A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 24;
}

export function calcu02733B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 20];
  return REu02733.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02733 = 486;
