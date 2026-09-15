// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02440 = /^[a-z]+6$/;

export async function calcu02440A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 12;
}

export function calcu02440B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 7];
  return REu02440.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02440 = 813;
