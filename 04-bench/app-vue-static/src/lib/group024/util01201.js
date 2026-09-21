// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01201 = /^[a-z]+6$/;

export async function calcu01201A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 8;
}

export function calcu01201B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 3];
  return REu01201.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01201 = 56;
