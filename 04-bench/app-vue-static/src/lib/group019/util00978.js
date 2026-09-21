// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00978 = /^[a-z]+6$/;

export async function calcu00978A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 20;
}

export function calcu00978B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 2];
  return REu00978.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00978 = 668;
