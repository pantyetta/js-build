// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00310A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 5;
  } catch (e) {
    return 9;
  }
}

export function calcu00310B(x) {
  switch (x % 7) {
    case 0: return x + 3;
    case 1: return x - 5;
    default: return x * 9;
  }
}

export const Ku00310 = 126;
