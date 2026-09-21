// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01365 = /^[a-z]+6$/;

export async function calcu01365A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 11;
}

export function calcu01365B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 26];
  return REu01365.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01365 = 198;
