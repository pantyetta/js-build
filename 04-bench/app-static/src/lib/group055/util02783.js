// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02783 = /^[a-z]+6$/;

export async function calcu02783A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 27;
}

export function calcu02783B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 1];
  return REu02783.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02783 = 592;
