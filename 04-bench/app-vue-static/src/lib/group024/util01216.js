// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01216 = /^[a-z]+6$/;

export async function calcu01216A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 15;
}

export function calcu01216B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 17];
  return REu01216.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01216 = 263;
