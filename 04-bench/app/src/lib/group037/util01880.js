// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01880 = /^[a-z]+6$/;

export async function calcu01880A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 2;
}

export function calcu01880B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 20];
  return REu01880.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01880 = 127;
