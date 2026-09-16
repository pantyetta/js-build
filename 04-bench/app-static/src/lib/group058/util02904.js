// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02904 = /^[a-z]+6$/;

export async function calcu02904A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 13;
}

export function calcu02904B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 6];
  return REu02904.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02904 = 779;
