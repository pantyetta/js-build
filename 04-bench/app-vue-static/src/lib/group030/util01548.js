// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01548 = /^[a-z]+6$/;

export async function calcu01548A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 3;
}

export function calcu01548B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 15];
  return REu01548.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01548 = 80;
