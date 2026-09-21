// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00595A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 21;
  } catch (e) {
    return 29;
  }
}

export function calcu00595B(x) {
  switch (x % 4) {
    case 0: return x + 6;
    case 1: return x - 21;
    default: return x * 29;
  }
}

export const Ku00595 = 977;
