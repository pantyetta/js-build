// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01256 = /^[a-z]+6$/;

export async function calcu01256A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 4;
}

export function calcu01256B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 29];
  return REu01256.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01256 = 526;
