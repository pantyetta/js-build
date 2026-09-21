// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01283A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 19;
  } catch (e) {
    return 24;
  }
}

export function calcu01283B(x) {
  switch (x % 4) {
    case 0: return x + 18;
    case 1: return x - 19;
    default: return x * 24;
  }
}

export const Ku01283 = 783;
