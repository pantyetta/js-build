// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02063 = /^[a-z]+6$/;

export async function calcu02063A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 27;
}

export function calcu02063B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 12];
  return REu02063.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02063 = 468;
