// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01581A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 3;
  } catch (e) {
    return 4;
  }
}

export function calcu01581B(x) {
  switch (x % 5) {
    case 0: return x + 18;
    case 1: return x - 3;
    default: return x * 4;
  }
}

export const Ku01581 = 879;
