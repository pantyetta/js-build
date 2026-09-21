// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00672A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 32;
  } catch (e) {
    return 21;
  }
}

export function calcu00672B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 32;
    default: return x * 21;
  }
}

export const Ku00672 = 912;
