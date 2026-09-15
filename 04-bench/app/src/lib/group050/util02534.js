// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02534 = /^[a-z]+6$/;

export async function calcu02534A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 6;
}

export function calcu02534B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 9];
  return REu02534.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02534 = 59;
