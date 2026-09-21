// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01426 = /^[a-z]+6$/;

export async function calcu01426A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 22;
}

export function calcu01426B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 5];
  return REu01426.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01426 = 199;
