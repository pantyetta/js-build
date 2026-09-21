// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00487A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 25;
  } catch (e) {
    return 25;
  }
}

export function calcu00487B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 25;
    default: return x * 25;
  }
}

export const Ku00487 = 145;
