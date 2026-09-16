// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02056 = /^[a-z]+6$/;

export async function calcu02056A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 28;
}

export function calcu02056B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 6];
  return REu02056.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02056 = 711;
