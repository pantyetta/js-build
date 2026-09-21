// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00116 = /^[a-z]+6$/;

export async function calcu00116A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 22;
}

export function calcu00116B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 25];
  return REu00116.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00116 = 547;
