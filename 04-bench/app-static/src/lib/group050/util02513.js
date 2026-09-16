// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02513 = /^[a-z]+6$/;

export async function calcu02513A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 9;
}

export function calcu02513B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 29];
  return REu02513.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02513 = 509;
