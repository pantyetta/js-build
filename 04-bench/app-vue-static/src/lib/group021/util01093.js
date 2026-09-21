// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01093 = /^[a-z]+6$/;

export async function calcu01093A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 18;
}

export function calcu01093B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 14];
  return REu01093.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01093 = 462;
