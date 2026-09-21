// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01018 = /^[a-z]+6$/;

export async function calcu01018A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 6;
}

export function calcu01018B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 21];
  return REu01018.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01018 = 90;
