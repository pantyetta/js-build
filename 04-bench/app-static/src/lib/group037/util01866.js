// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01866 = /^[a-z]+6$/;

export async function calcu01866A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 21;
}

export function calcu01866B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 20];
  return REu01866.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01866 = 108;
