// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00061A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 4;
  } catch (e) {
    return 18;
  }
}

export function calcu00061B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 4;
    default: return x * 18;
  }
}

export const Ku00061 = 275;
