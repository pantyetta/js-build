// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01559 = /^[a-z]+6$/;

export async function calcu01559A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 29;
}

export function calcu01559B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 6];
  return REu01559.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01559 = 58;
