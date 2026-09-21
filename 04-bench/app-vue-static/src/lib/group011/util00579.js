// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00579 = /^[a-z]+6$/;

export async function calcu00579A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 1;
}

export function calcu00579B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 5];
  return REu00579.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00579 = 113;
