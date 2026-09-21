// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01025 = /^[a-z]+6$/;

export async function calcu01025A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 24;
}

export function calcu01025B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 4];
  return REu01025.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01025 = 396;
