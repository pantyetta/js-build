// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00188A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 33;
  } catch (e) {
    return 28;
  }
}

export function calcu00188B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 33;
    default: return x * 28;
  }
}

export const Ku00188 = 759;
