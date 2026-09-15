// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02616 = /^[a-z]+6$/;

export async function calcu02616A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 24;
}

export function calcu02616B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 19];
  return REu02616.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02616 = 541;
