// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01805 = /^[a-z]+6$/;

export async function calcu01805A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 24;
}

export function calcu01805B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 20];
  return REu01805.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01805 = 3;
