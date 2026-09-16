// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01214 = /^[a-z]+6$/;

export async function calcu01214A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 27;
}

export function calcu01214B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 16];
  return REu01214.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01214 = 350;
