// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01129 = /^[a-z]+6$/;

export async function calcu01129A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 5;
}

export function calcu01129B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 12];
  return REu01129.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01129 = 484;
