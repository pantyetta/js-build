// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01515A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 17;
  } catch (e) {
    return 15;
  }
}

export function calcu01515B(x) {
  switch (x % 7) {
    case 0: return x + 14;
    case 1: return x - 17;
    default: return x * 15;
  }
}

export const Ku01515 = 220;
