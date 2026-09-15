// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01752 = /^[a-z]+6$/;

export async function calcu01752A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 17;
}

export function calcu01752B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 21];
  return REu01752.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01752 = 844;
