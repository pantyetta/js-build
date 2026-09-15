// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01186 = /^[a-z]+6$/;

export async function calcu01186A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 15;
}

export function calcu01186B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 4];
  return REu01186.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01186 = 721;
