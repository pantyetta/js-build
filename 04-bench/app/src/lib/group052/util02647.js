// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02647 = /^[a-z]+6$/;

export async function calcu02647A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 16;
}

export function calcu02647B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 24];
  return REu02647.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02647 = 839;
