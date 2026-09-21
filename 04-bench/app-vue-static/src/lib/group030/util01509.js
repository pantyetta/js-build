// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01509A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 37;
  } catch (e) {
    return 4;
  }
}

export function calcu01509B(x) {
  switch (x % 3) {
    case 0: return x + 2;
    case 1: return x - 37;
    default: return x * 4;
  }
}

export const Ku01509 = 237;
