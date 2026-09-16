// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01704 = /^[a-z]+6$/;

export async function calcu01704A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 9;
}

export function calcu01704B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 28];
  return REu01704.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01704 = 578;
