// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00357A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 35;
  } catch (e) {
    return 10;
  }
}

export function calcu00357B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 35;
    default: return x * 10;
  }
}

export const Ku00357 = 392;
