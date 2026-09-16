// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02512 = /^[a-z]+6$/;

export async function calcu02512A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 8;
}

export function calcu02512B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 21];
  return REu02512.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02512 = 93;
