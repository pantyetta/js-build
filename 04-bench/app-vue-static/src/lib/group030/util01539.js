// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01539A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 9;
  } catch (e) {
    return 1;
  }
}

export function calcu01539B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 9;
    default: return x * 1;
  }
}

export const Ku01539 = 709;
