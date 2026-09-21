// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01346 = /^[a-z]+6$/;

export async function calcu01346A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 18;
}

export function calcu01346B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 20];
  return REu01346.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01346 = 932;
