// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02711 = /^[a-z]+6$/;

export async function calcu02711A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 29;
}

export function calcu02711B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 20];
  return REu02711.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02711 = 481;
