// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01579 = /^[a-z]+6$/;

export async function calcu01579A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 8;
}

export function calcu01579B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 24];
  return REu01579.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01579 = 506;
