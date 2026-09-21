// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01507 = /^[a-z]+6$/;

export async function calcu01507A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 10;
}

export function calcu01507B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 28];
  return REu01507.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01507 = 501;
