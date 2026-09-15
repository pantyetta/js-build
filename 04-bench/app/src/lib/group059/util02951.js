// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02951 = /^[a-z]+6$/;

export async function calcu02951A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 16;
}

export function calcu02951B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 14];
  return REu02951.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02951 = 584;
