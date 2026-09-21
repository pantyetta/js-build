// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01192A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 37;
  } catch (e) {
    return 11;
  }
}

export function calcu01192B(x) {
  switch (x % 7) {
    case 0: return x + 3;
    case 1: return x - 37;
    default: return x * 11;
  }
}

export const Ku01192 = 855;
