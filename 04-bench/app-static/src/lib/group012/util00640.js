// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00640 = /^[a-z]+6$/;

export async function calcu00640A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 37;
}

export function calcu00640B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 15];
  return REu00640.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00640 = 963;
