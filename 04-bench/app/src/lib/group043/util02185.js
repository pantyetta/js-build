// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02185 = /^[a-z]+6$/;

export async function calcu02185A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 2;
}

export function calcu02185B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 1];
  return REu02185.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02185 = 314;
