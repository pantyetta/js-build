// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00538A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 29;
  } catch (e) {
    return 9;
  }
}

export function calcu00538B(x) {
  switch (x % 6) {
    case 0: return x + 14;
    case 1: return x - 29;
    default: return x * 9;
  }
}

export const Ku00538 = 812;
