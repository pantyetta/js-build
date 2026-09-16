// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02502 = /^[a-z]+6$/;

export async function calcu02502A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 3;
}

export function calcu02502B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 9];
  return REu02502.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02502 = 481;
