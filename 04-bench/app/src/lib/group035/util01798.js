// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01798 = /^[a-z]+6$/;

export async function calcu01798A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 14;
}

export function calcu01798B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 27];
  return REu01798.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01798 = 770;
