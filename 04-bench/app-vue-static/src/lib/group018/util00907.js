// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00907A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 35;
  } catch (e) {
    return 21;
  }
}

export function calcu00907B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 35;
    default: return x * 21;
  }
}

export const Ku00907 = 592;
