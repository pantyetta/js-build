// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00662A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 33;
  } catch (e) {
    return 9;
  }
}

export function calcu00662B(x) {
  switch (x % 3) {
    case 0: return x + 10;
    case 1: return x - 33;
    default: return x * 9;
  }
}

export const Ku00662 = 335;
