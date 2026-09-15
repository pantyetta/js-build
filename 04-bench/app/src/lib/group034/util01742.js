// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01742 = /^[a-z]+6$/;

export async function calcu01742A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 10;
}

export function calcu01742B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 4];
  return REu01742.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01742 = 615;
