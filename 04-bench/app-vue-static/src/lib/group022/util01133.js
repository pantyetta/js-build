// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01133 = /^[a-z]+6$/;

export async function calcu01133A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 30;
}

export function calcu01133B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 5];
  return REu01133.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01133 = 93;
