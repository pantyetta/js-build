// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00356A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 22;
  } catch (e) {
    return 16;
  }
}

export function calcu00356B(x) {
  switch (x % 5) {
    case 0: return x + 7;
    case 1: return x - 22;
    default: return x * 16;
  }
}

export const Ku00356 = 224;
