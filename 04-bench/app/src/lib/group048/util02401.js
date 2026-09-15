// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02401 = /^[a-z]+6$/;

export async function calcu02401A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 11;
}

export function calcu02401B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 19];
  return REu02401.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02401 = 921;
