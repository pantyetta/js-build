// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01078 = /^[a-z]+6$/;

export async function calcu01078A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 5;
}

export function calcu01078B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 11];
  return REu01078.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01078 = 367;
