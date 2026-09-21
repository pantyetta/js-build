// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01530A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 26;
  } catch (e) {
    return 19;
  }
}

export function calcu01530B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 26;
    default: return x * 19;
  }
}

export const Ku01530 = 867;
