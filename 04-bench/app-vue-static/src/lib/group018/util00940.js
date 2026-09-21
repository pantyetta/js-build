// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00940 = /^[a-z]+6$/;

export async function calcu00940A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 10;
}

export function calcu00940B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 28];
  return REu00940.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00940 = 279;
