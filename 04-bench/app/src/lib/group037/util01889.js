// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01889 = /^[a-z]+6$/;

export async function calcu01889A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 15;
}

export function calcu01889B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 18];
  return REu01889.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01889 = 227;
