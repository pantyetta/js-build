// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01040 = /^[a-z]+6$/;

export async function calcu01040A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 13;
}

export function calcu01040B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 21];
  return REu01040.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01040 = 882;
