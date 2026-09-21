// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00366A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 5;
  } catch (e) {
    return 12;
  }
}

export function calcu00366B(x) {
  switch (x % 6) {
    case 0: return x + 6;
    case 1: return x - 5;
    default: return x * 12;
  }
}

export const Ku00366 = 274;
