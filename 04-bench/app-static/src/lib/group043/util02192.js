// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02192 = /^[a-z]+6$/;

export async function calcu02192A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 19;
}

export function calcu02192B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 11];
  return REu02192.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02192 = 991;
