// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00571A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 29;
  } catch (e) {
    return 17;
  }
}

export function calcu00571B(x) {
  switch (x % 4) {
    case 0: return x + 5;
    case 1: return x - 29;
    default: return x * 17;
  }
}

export const Ku00571 = 198;
