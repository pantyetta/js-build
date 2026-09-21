// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00129 = /^[a-z]+6$/;

export async function calcu00129A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 37;
}

export function calcu00129B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 11];
  return REu00129.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00129 = 196;
