// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02420 = /^[a-z]+6$/;

export async function calcu02420A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 19;
}

export function calcu02420B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 9];
  return REu02420.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02420 = 407;
