// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01048 = /^[a-z]+6$/;

export async function calcu01048A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 21;
}

export function calcu01048B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 7];
  return REu01048.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01048 = 217;
