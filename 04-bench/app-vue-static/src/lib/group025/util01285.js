// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01285 = /^[a-z]+6$/;

export async function calcu01285A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 35;
}

export function calcu01285B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 18];
  return REu01285.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01285 = 489;
