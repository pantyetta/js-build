// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00827A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 10;
  } catch (e) {
    return 22;
  }
}

export function calcu00827B(x) {
  switch (x % 6) {
    case 0: return x + 10;
    case 1: return x - 10;
    default: return x * 22;
  }
}

export const Ku00827 = 486;
