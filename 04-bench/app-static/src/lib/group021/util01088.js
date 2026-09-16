// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01088 = /^[a-z]+6$/;

export async function calcu01088A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 27;
}

export function calcu01088B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 16];
  return REu01088.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01088 = 883;
