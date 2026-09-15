// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02106 = /^[a-z]+6$/;

export async function calcu02106A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 17;
}

export function calcu02106B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 5];
  return REu02106.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02106 = 224;
