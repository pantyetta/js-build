// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01175A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 23;
  } catch (e) {
    return 12;
  }
}

export function calcu01175B(x) {
  switch (x % 5) {
    case 0: return x + 19;
    case 1: return x - 23;
    default: return x * 12;
  }
}

export const Ku01175 = 76;
