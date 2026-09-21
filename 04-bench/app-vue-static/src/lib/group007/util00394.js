// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00394 = /^[a-z]+6$/;

export async function calcu00394A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 25;
}

export function calcu00394B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 28];
  return REu00394.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00394 = 58;
