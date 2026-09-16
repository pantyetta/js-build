// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01884 = /^[a-z]+6$/;

export async function calcu01884A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 29;
}

export function calcu01884B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 19];
  return REu01884.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01884 = 604;
