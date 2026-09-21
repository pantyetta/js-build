// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00124 = /^[a-z]+6$/;

export async function calcu00124A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 25;
}

export function calcu00124B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 4];
  return REu00124.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00124 = 948;
