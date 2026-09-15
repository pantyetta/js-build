// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01929 = /^[a-z]+6$/;

export async function calcu01929A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 35;
}

export function calcu01929B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 13];
  return REu01929.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01929 = 274;
