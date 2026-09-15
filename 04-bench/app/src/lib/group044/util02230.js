// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02230 = /^[a-z]+6$/;

export async function calcu02230A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 12;
}

export function calcu02230B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 26];
  return REu02230.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02230 = 350;
