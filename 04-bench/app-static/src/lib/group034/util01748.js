// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01748 = /^[a-z]+6$/;

export async function calcu01748A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 9;
}

export function calcu01748B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 8];
  return REu01748.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01748 = 551;
