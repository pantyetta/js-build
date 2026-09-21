// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00148A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 30;
  } catch (e) {
    return 26;
  }
}

export function calcu00148B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 30;
    default: return x * 26;
  }
}

export const Ku00148 = 341;
