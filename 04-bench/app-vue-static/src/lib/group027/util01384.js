// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01384A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 31;
  } catch (e) {
    return 4;
  }
}

export function calcu01384B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 31;
    default: return x * 4;
  }
}

export const Ku01384 = 835;
