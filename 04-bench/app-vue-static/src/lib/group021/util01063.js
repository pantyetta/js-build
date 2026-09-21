// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01063 = /^[a-z]+6$/;

export async function calcu01063A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 10;
}

export function calcu01063B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 21];
  return REu01063.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01063 = 755;
