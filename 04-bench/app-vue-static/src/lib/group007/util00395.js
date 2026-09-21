// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00395 = /^[a-z]+6$/;

export async function calcu00395A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 29;
}

export function calcu00395B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 26];
  return REu00395.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00395 = 723;
