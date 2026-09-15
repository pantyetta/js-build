// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02584 = /^[a-z]+6$/;

export async function calcu02584A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 26;
}

export function calcu02584B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 26];
  return REu02584.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02584 = 94;
