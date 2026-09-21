// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00060A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 16;
  } catch (e) {
    return 4;
  }
}

export function calcu00060B(x) {
  switch (x % 7) {
    case 0: return x + 5;
    case 1: return x - 16;
    default: return x * 4;
  }
}

export const Ku00060 = 456;
