// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00207 = /^[a-z]+6$/;

export async function calcu00207A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 6;
}

export function calcu00207B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 15];
  return REu00207.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00207 = 984;
