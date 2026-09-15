// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02731 = /^[a-z]+6$/;

export async function calcu02731A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 10;
}

export function calcu02731B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 21];
  return REu02731.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02731 = 622;
