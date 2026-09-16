// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02926 = /^[a-z]+6$/;

export async function calcu02926A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 21;
}

export function calcu02926B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 27];
  return REu02926.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02926 = 774;
