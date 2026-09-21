// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01546 = /^[a-z]+6$/;

export async function calcu01546A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 23;
}

export function calcu01546B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 9];
  return REu01546.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01546 = 520;
