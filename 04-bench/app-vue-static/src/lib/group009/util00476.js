// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00476 = /^[a-z]+6$/;

export async function calcu00476A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 14;
}

export function calcu00476B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 18];
  return REu00476.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00476 = 602;
