// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02195 = /^[a-z]+6$/;

export async function calcu02195A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 20;
}

export function calcu02195B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 12];
  return REu02195.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02195 = 779;
