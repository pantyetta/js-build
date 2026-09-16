// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01589 = /^[a-z]+6$/;

export async function calcu01589A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 10;
}

export function calcu01589B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 20];
  return REu01589.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01589 = 863;
