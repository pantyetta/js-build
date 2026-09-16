// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01833 = /^[a-z]+6$/;

export async function calcu01833A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 37;
}

export function calcu01833B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 16];
  return REu01833.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01833 = 300;
