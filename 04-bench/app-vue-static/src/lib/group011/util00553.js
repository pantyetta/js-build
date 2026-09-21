// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00553 = /^[a-z]+6$/;

export async function calcu00553A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 34;
}

export function calcu00553B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 6];
  return REu00553.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00553 = 650;
