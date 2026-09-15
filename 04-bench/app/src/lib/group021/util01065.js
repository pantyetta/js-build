// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01065 = /^[a-z]+6$/;

export async function calcu01065A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 36;
}

export function calcu01065B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 1];
  return REu01065.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01065 = 848;
