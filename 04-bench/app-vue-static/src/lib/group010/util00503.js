// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00503A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 15;
  } catch (e) {
    return 20;
  }
}

export function calcu00503B(x) {
  switch (x % 4) {
    case 0: return x + 14;
    case 1: return x - 15;
    default: return x * 20;
  }
}

export const Ku00503 = 270;
