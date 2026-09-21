// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01293A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 29;
  } catch (e) {
    return 13;
  }
}

export function calcu01293B(x) {
  switch (x % 6) {
    case 0: return x + 7;
    case 1: return x - 29;
    default: return x * 13;
  }
}

export const Ku01293 = 752;
