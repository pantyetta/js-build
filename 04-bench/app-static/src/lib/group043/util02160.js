// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02160 = /^[a-z]+6$/;

export async function calcu02160A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 23;
}

export function calcu02160B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 22];
  return REu02160.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02160 = 449;
