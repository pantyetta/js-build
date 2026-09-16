// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02111 = /^[a-z]+6$/;

export async function calcu02111A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 26;
}

export function calcu02111B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 26];
  return REu02111.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02111 = 951;
