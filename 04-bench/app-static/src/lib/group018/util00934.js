// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00934 = /^[a-z]+6$/;

export async function calcu00934A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 6;
}

export function calcu00934B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 14];
  return REu00934.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00934 = 480;
