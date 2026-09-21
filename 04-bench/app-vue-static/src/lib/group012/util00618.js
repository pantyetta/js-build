// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00618 = /^[a-z]+6$/;

export async function calcu00618A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 28;
}

export function calcu00618B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 7];
  return REu00618.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00618 = 61;
