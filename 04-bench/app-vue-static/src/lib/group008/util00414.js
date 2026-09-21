// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00414A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 32;
  } catch (e) {
    return 14;
  }
}

export function calcu00414B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 32;
    default: return x * 14;
  }
}

export const Ku00414 = 169;
