// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00200 = /^[a-z]+6$/;

export async function calcu00200A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 11;
}

export function calcu00200B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 17];
  return REu00200.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00200 = 635;
