// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00137A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 2;
  } catch (e) {
    return 2;
  }
}

export function calcu00137B(x) {
  switch (x % 6) {
    case 0: return x + 3;
    case 1: return x - 2;
    default: return x * 2;
  }
}

export const Ku00137 = 310;
