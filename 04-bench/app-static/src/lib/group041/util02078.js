// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02078 = /^[a-z]+6$/;

export async function calcu02078A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 2;
}

export function calcu02078B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 26];
  return REu02078.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02078 = 985;
