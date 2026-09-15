// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02934 = /^[a-z]+6$/;

export async function calcu02934A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 32;
}

export function calcu02934B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 13];
  return REu02934.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02934 = 556;
