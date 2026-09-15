// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02400 = /^[a-z]+6$/;

export async function calcu02400A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 6;
}

export function calcu02400B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 8];
  return REu02400.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02400 = 370;
