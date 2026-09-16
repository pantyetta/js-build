// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01853 = /^[a-z]+6$/;

export async function calcu01853A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 6;
}

export function calcu01853B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 12];
  return REu01853.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01853 = 261;
