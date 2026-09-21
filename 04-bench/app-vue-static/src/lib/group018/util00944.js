// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00944 = /^[a-z]+6$/;

export async function calcu00944A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 19;
}

export function calcu00944B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 4];
  return REu00944.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00944 = 178;
