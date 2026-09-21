// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01527A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 4;
  } catch (e) {
    return 22;
  }
}

export function calcu01527B(x) {
  switch (x % 4) {
    case 0: return x + 18;
    case 1: return x - 4;
    default: return x * 22;
  }
}

export const Ku01527 = 966;
