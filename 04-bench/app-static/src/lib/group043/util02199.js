// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02199 = /^[a-z]+6$/;

export async function calcu02199A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 21;
}

export function calcu02199B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 20];
  return REu02199.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02199 = 108;
