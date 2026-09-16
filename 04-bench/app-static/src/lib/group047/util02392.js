// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02392 = /^[a-z]+6$/;

export async function calcu02392A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 5;
}

export function calcu02392B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 10];
  return REu02392.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02392 = 271;
