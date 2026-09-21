// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00128A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 16;
  } catch (e) {
    return 17;
  }
}

export function calcu00128B(x) {
  switch (x % 5) {
    case 0: return x + 3;
    case 1: return x - 16;
    default: return x * 17;
  }
}

export const Ku00128 = 726;
