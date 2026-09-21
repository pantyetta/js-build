// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01503A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 29;
  } catch (e) {
    return 25;
  }
}

export function calcu01503B(x) {
  switch (x % 4) {
    case 0: return x + 10;
    case 1: return x - 29;
    default: return x * 25;
  }
}

export const Ku01503 = 199;
