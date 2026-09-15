// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02220 = /^[a-z]+6$/;

export async function calcu02220A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 37;
}

export function calcu02220B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 3];
  return REu02220.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02220 = 806;
