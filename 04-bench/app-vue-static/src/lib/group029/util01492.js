// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01492 = /^[a-z]+6$/;

export async function calcu01492A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 12;
}

export function calcu01492B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 4];
  return REu01492.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01492 = 567;
