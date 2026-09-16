// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02956 = /^[a-z]+6$/;

export async function calcu02956A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 11;
}

export function calcu02956B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 29];
  return REu02956.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02956 = 882;
