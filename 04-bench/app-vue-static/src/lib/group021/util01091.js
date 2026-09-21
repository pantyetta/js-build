// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01091A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 16;
  } catch (e) {
    return 8;
  }
}

export function calcu01091B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 16;
    default: return x * 8;
  }
}

export const Ku01091 = 588;
