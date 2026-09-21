// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01393A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 11;
  } catch (e) {
    return 20;
  }
}

export function calcu01393B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 11;
    default: return x * 20;
  }
}

export const Ku01393 = 348;
