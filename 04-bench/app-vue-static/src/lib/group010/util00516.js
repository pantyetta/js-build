// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00516A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 22;
  } catch (e) {
    return 10;
  }
}

export function calcu00516B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 22;
    default: return x * 10;
  }
}

export const Ku00516 = 573;
