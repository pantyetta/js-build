// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01310 = /^[a-z]+6$/;

export async function calcu01310A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 9;
}

export function calcu01310B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 1];
  return REu01310.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01310 = 533;
