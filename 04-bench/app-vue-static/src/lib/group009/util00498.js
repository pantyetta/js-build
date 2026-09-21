// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00498A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 2;
  } catch (e) {
    return 25;
  }
}

export function calcu00498B(x) {
  switch (x % 5) {
    case 0: return x + 5;
    case 1: return x - 2;
    default: return x * 25;
  }
}

export const Ku00498 = 452;
