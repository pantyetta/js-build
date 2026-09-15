// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02200 = /^[a-z]+6$/;

export async function calcu02200A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 13;
}

export function calcu02200B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 28];
  return REu02200.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02200 = 916;
