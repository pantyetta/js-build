// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01464 = /^[a-z]+6$/;

export async function calcu01464A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 36;
}

export function calcu01464B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 1];
  return REu01464.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01464 = 786;
