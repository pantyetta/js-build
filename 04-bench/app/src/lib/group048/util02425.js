// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02425 = /^[a-z]+6$/;

export async function calcu02425A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 30;
}

export function calcu02425B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 16];
  return REu02425.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02425 = 191;
