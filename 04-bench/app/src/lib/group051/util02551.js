// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02551 = /^[a-z]+6$/;

export async function calcu02551A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 24;
}

export function calcu02551B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 24];
  return REu02551.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02551 = 994;
