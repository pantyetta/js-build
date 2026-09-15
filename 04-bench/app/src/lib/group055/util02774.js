// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02774 = /^[a-z]+6$/;

export async function calcu02774A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 22;
}

export function calcu02774B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 6];
  return REu02774.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02774 = 181;
