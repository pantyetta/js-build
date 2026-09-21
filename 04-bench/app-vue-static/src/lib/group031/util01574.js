// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01574A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 25;
  } catch (e) {
    return 1;
  }
}

export function calcu01574B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 25;
    default: return x * 1;
  }
}

export const Ku01574 = 764;
