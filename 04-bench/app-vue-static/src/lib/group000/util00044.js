// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00044A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 24;
  } catch (e) {
    return 22;
  }
}

export function calcu00044B(x) {
  switch (x % 7) {
    case 0: return x + 14;
    case 1: return x - 24;
    default: return x * 22;
  }
}

export const Ku00044 = 966;
