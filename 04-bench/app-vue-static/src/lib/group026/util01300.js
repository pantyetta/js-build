// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01300 = /^[a-z]+6$/;

export async function calcu01300A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 16;
}

export function calcu01300B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 5];
  return REu01300.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01300 = 998;
