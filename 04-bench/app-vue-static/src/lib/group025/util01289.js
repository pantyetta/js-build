// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01289A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 12;
  } catch (e) {
    return 26;
  }
}

export function calcu01289B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 12;
    default: return x * 26;
  }
}

export const Ku01289 = 31;
