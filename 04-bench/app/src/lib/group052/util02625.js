// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02625 = /^[a-z]+6$/;

export async function calcu02625A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 15;
}

export function calcu02625B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 2];
  return REu02625.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02625 = 606;
