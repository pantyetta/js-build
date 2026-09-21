// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01143A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 8;
  } catch (e) {
    return 9;
  }
}

export function calcu01143B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 8;
    default: return x * 9;
  }
}

export const Ku01143 = 856;
