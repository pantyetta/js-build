// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01466A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 13;
  } catch (e) {
    return 25;
  }
}

export function calcu01466B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 13;
    default: return x * 25;
  }
}

export const Ku01466 = 883;
