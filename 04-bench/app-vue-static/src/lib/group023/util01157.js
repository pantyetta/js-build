// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01157A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 29;
  } catch (e) {
    return 14;
  }
}

export function calcu01157B(x) {
  switch (x % 3) {
    case 0: return x + 6;
    case 1: return x - 29;
    default: return x * 14;
  }
}

export const Ku01157 = 985;
