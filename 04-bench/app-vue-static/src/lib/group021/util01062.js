// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01062A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 16;
  } catch (e) {
    return 9;
  }
}

export function calcu01062B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 16;
    default: return x * 9;
  }
}

export const Ku01062 = 500;
