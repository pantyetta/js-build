// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01900 = /^[a-z]+6$/;

export async function calcu01900A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 6;
}

export function calcu01900B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 7];
  return REu01900.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01900 = 299;
