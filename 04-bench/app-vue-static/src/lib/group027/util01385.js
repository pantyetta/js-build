// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01385A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 10;
  } catch (e) {
    return 17;
  }
}

export function calcu01385B(x) {
  switch (x % 3) {
    case 0: return x + 19;
    case 1: return x - 10;
    default: return x * 17;
  }
}

export const Ku01385 = 630;
