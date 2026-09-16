// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02759 = /^[a-z]+6$/;

export async function calcu02759A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 12;
}

export function calcu02759B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 21];
  return REu02759.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02759 = 571;
