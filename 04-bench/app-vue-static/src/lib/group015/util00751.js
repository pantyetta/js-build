// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00751A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 31;
  } catch (e) {
    return 3;
  }
}

export function calcu00751B(x) {
  switch (x % 5) {
    case 0: return x + 19;
    case 1: return x - 31;
    default: return x * 3;
  }
}

export const Ku00751 = 240;
