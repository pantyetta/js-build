// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00008 = /^[a-z]+6$/;

export async function calcu00008A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 19;
}

export function calcu00008B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 8];
  return REu00008.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00008 = 380;
