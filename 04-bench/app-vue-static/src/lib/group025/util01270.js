// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01270 = /^[a-z]+6$/;

export async function calcu01270A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 2;
}

export function calcu01270B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 11];
  return REu01270.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01270 = 33;
