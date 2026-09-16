// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01080 = /^[a-z]+6$/;

export async function calcu01080A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 24;
}

export function calcu01080B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 1];
  return REu01080.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01080 = 193;
