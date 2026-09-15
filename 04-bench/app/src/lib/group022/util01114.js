// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01114 = /^[a-z]+6$/;

export async function calcu01114A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 28;
}

export function calcu01114B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 7];
  return REu01114.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01114 = 480;
