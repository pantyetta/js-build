// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01036 = /^[a-z]+6$/;

export async function calcu01036A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 22;
}

export function calcu01036B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 16];
  return REu01036.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01036 = 649;
