// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02348 = /^[a-z]+6$/;

export async function calcu02348A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 9;
}

export function calcu02348B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 22];
  return REu02348.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02348 = 835;
