// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01353 = /^[a-z]+6$/;

export async function calcu01353A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 30;
}

export function calcu01353B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 5];
  return REu01353.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01353 = 663;
