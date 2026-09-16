// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02148 = /^[a-z]+6$/;

export async function calcu02148A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 4;
}

export function calcu02148B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 3];
  return REu02148.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02148 = 519;
