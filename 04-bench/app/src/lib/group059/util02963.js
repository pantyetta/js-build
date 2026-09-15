// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02963 = /^[a-z]+6$/;

export async function calcu02963A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 25;
}

export function calcu02963B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 4];
  return REu02963.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02963 = 905;
