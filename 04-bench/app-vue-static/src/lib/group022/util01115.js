// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01115A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 19;
  } catch (e) {
    return 9;
  }
}

export function calcu01115B(x) {
  switch (x % 7) {
    case 0: return x + 10;
    case 1: return x - 19;
    default: return x * 9;
  }
}

export const Ku01115 = 621;
