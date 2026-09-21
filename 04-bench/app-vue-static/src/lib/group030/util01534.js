// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01534 = /^[a-z]+6$/;

export async function calcu01534A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 19;
}

export function calcu01534B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 20];
  return REu01534.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01534 = 283;
