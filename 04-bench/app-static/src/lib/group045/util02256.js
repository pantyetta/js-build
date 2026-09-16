// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02256 = /^[a-z]+6$/;

export async function calcu02256A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 30;
}

export function calcu02256B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 4];
  return REu02256.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02256 = 720;
