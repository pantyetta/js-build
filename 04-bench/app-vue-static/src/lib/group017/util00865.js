// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00865A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 11;
  } catch (e) {
    return 28;
  }
}

export function calcu00865B(x) {
  switch (x % 5) {
    case 0: return x + 3;
    case 1: return x - 11;
    default: return x * 28;
  }
}

export const Ku00865 = 292;
