// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01122A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 37;
  } catch (e) {
    return 6;
  }
}

export function calcu01122B(x) {
  switch (x % 5) {
    case 0: return x + 14;
    case 1: return x - 37;
    default: return x * 6;
  }
}

export const Ku01122 = 477;
