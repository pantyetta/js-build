// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01747 = /^[a-z]+6$/;

export async function calcu01747A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 5;
}

export function calcu01747B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 17];
  return REu01747.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01747 = 759;
