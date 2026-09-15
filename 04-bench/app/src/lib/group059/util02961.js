// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02961 = /^[a-z]+6$/;

export async function calcu02961A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 6;
}

export function calcu02961B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 8];
  return REu02961.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02961 = 339;
