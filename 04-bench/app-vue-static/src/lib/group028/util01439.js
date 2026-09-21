// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01439 = /^[a-z]+6$/;

export async function calcu01439A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 29;
}

export function calcu01439B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 5];
  return REu01439.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01439 = 326;
