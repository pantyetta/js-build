// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00806A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 2;
  } catch (e) {
    return 26;
  }
}

export function calcu00806B(x) {
  switch (x % 4) {
    case 0: return x + 16;
    case 1: return x - 2;
    default: return x * 26;
  }
}

export const Ku00806 = 565;
