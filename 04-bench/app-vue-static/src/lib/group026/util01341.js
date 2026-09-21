// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01341A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 35;
  } catch (e) {
    return 12;
  }
}

export function calcu01341B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 35;
    default: return x * 12;
  }
}

export const Ku01341 = 695;
