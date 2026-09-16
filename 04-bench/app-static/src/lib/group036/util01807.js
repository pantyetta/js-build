// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01807 = /^[a-z]+6$/;

export async function calcu01807A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 19;
}

export function calcu01807B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 16];
  return REu01807.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01807 = 564;
