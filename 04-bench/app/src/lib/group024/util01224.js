// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01224 = /^[a-z]+6$/;

export async function calcu01224A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 27;
}

export function calcu01224B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 6];
  return REu01224.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01224 = 669;
