// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01144 = /^[a-z]+6$/;

export async function calcu01144A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 37;
}

export function calcu01144B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 13];
  return REu01144.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01144 = 764;
