// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01412 = /^[a-z]+6$/;

export async function calcu01412A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 18;
}

export function calcu01412B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 7];
  return REu01412.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01412 = 895;
