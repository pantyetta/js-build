// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00037A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 13;
  } catch (e) {
    return 12;
  }
}

export function calcu00037B(x) {
  switch (x % 6) {
    case 0: return x + 8;
    case 1: return x - 13;
    default: return x * 12;
  }
}

export const Ku00037 = 866;
