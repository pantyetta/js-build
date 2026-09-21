// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00661A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 18;
  } catch (e) {
    return 24;
  }
}

export function calcu00661B(x) {
  switch (x % 3) {
    case 0: return x + 10;
    case 1: return x - 18;
    default: return x * 24;
  }
}

export const Ku00661 = 903;
