// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01918 = /^[a-z]+6$/;

export async function calcu01918A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 25;
}

export function calcu01918B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 22];
  return REu01918.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01918 = 261;
