// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01923 = /^[a-z]+6$/;

export async function calcu01923A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 7;
}

export function calcu01923B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 1];
  return REu01923.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01923 = 792;
