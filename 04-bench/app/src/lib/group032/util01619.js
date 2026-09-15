// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01619 = /^[a-z]+6$/;

export async function calcu01619A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 24;
}

export function calcu01619B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 18];
  return REu01619.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01619 = 479;
