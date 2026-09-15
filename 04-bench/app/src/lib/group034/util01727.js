// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01727 = /^[a-z]+6$/;

export async function calcu01727A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 10;
}

export function calcu01727B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 19];
  return REu01727.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01727 = 496;
