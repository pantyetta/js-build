// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01238A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 23;
  } catch (e) {
    return 28;
  }
}

export function calcu01238B(x) {
  switch (x % 4) {
    case 0: return x + 5;
    case 1: return x - 23;
    default: return x * 28;
  }
}

export const Ku01238 = 65;
