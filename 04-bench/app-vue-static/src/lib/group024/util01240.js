// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01240 = /^[a-z]+6$/;

export async function calcu01240A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 37;
}

export function calcu01240B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 16];
  return REu01240.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01240 = 165;
