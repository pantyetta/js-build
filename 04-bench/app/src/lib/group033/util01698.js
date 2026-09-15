// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01698 = /^[a-z]+6$/;

export async function calcu01698A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 29;
}

export function calcu01698B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 4];
  return REu01698.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01698 = 781;
