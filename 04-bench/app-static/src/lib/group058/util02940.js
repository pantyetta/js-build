// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02940 = /^[a-z]+6$/;

export async function calcu02940A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 11;
}

export function calcu02940B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 4];
  return REu02940.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02940 = 465;
