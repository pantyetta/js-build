// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00972A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 26;
  } catch (e) {
    return 3;
  }
}

export function calcu00972B(x) {
  switch (x % 4) {
    case 0: return x + 12;
    case 1: return x - 26;
    default: return x * 3;
  }
}

export const Ku00972 = 589;
