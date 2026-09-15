// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01557 = /^[a-z]+6$/;

export async function calcu01557A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 8;
}

export function calcu01557B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 3];
  return REu01557.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01557 = 1;
