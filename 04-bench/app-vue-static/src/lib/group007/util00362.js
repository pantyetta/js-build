// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00362 = /^[a-z]+6$/;

export async function calcu00362A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 31;
}

export function calcu00362B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 28];
  return REu00362.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00362 = 510;
