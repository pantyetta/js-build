// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00236 = /^[a-z]+6$/;

export async function calcu00236A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 29;
}

export function calcu00236B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 2];
  return REu00236.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00236 = 798;
