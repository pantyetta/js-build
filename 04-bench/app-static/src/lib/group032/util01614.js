// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01614 = /^[a-z]+6$/;

export async function calcu01614A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 23;
}

export function calcu01614B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 24];
  return REu01614.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01614 = 468;
