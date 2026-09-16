// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00781 = /^[a-z]+6$/;

export async function calcu00781A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 6;
}

export function calcu00781B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 16];
  return REu00781.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00781 = 163;
