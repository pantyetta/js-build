// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01671 = /^[a-z]+6$/;

export async function calcu01671A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 18;
}

export function calcu01671B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 29];
  return REu01671.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01671 = 864;
