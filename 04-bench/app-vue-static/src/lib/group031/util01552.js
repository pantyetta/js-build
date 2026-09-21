// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01552A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 9;
  } catch (e) {
    return 4;
  }
}

export function calcu01552B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 9;
    default: return x * 4;
  }
}

export const Ku01552 = 131;
