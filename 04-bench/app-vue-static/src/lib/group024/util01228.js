// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01228 = /^[a-z]+6$/;

export async function calcu01228A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 3;
}

export function calcu01228B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 16];
  return REu01228.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01228 = 30;
