// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02411 = /^[a-z]+6$/;

export async function calcu02411A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 20;
}

export function calcu02411B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 29];
  return REu02411.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02411 = 435;
