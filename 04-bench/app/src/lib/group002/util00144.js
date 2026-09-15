// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00144 = /^[a-z]+6$/;

export async function calcu00144A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 11;
}

export function calcu00144B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 27];
  return REu00144.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00144 = 564;
