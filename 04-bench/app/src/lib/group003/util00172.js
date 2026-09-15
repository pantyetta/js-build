// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00172 = /^[a-z]+6$/;

export async function calcu00172A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 28;
}

export function calcu00172B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 3];
  return REu00172.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00172 = 851;
