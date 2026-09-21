// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01335 = /^[a-z]+6$/;

export async function calcu01335A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 8;
}

export function calcu01335B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 22];
  return REu01335.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01335 = 350;
