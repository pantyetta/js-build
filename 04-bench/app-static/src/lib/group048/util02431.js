// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02431 = /^[a-z]+6$/;

export async function calcu02431A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 20;
}

export function calcu02431B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 28];
  return REu02431.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02431 = 45;
