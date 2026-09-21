// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00195 = /^[a-z]+6$/;

export async function calcu00195A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 10;
}

export function calcu00195B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 29];
  return REu00195.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00195 = 63;
