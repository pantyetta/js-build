// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00431 = /^[a-z]+6$/;

export async function calcu00431A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 33;
}

export function calcu00431B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 25];
  return REu00431.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00431 = 802;
