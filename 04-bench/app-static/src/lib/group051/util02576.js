// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02576 = /^[a-z]+6$/;

export async function calcu02576A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 33;
}

export function calcu02576B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 12];
  return REu02576.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02576 = 151;
