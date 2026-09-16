// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02025 = /^[a-z]+6$/;

export async function calcu02025A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 4;
}

export function calcu02025B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 18];
  return REu02025.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02025 = 728;
