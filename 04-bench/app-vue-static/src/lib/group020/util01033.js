// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01033A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 24;
  } catch (e) {
    return 24;
  }
}

export function calcu01033B(x) {
  switch (x % 5) {
    case 0: return x + 8;
    case 1: return x - 24;
    default: return x * 24;
  }
}

export const Ku01033 = 8;
