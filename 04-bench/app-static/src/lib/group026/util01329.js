// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01329 = /^[a-z]+6$/;

export async function calcu01329A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 18;
}

export function calcu01329B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 14];
  return REu01329.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01329 = 381;
