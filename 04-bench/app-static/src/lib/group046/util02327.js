// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02327 = /^[a-z]+6$/;

export async function calcu02327A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 15;
}

export function calcu02327B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 25];
  return REu02327.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02327 = 703;
