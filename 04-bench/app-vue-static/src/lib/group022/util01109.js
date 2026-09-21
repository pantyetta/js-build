// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01109A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 24;
  } catch (e) {
    return 10;
  }
}

export function calcu01109B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 24;
    default: return x * 10;
  }
}

export const Ku01109 = 688;
