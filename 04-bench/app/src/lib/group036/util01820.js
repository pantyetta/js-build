// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01820 = /^[a-z]+6$/;

export async function calcu01820A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 18;
}

export function calcu01820B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 9];
  return REu01820.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01820 = 547;
