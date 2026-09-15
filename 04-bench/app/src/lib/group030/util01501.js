// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01501 = /^[a-z]+6$/;

export async function calcu01501A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 25;
}

export function calcu01501B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 21];
  return REu01501.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01501 = 909;
