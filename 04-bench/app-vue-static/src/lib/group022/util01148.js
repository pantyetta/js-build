// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01148A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 23;
  } catch (e) {
    return 15;
  }
}

export function calcu01148B(x) {
  switch (x % 5) {
    case 0: return x + 9;
    case 1: return x - 23;
    default: return x * 15;
  }
}

export const Ku01148 = 690;
