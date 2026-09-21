// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00267A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 23;
  } catch (e) {
    return 16;
  }
}

export function calcu00267B(x) {
  switch (x % 5) {
    case 0: return x + 8;
    case 1: return x - 23;
    default: return x * 16;
  }
}

export const Ku00267 = 511;
