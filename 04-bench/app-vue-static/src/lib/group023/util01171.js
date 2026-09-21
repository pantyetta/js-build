// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01171A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 4;
  } catch (e) {
    return 12;
  }
}

export function calcu01171B(x) {
  switch (x % 5) {
    case 0: return x + 17;
    case 1: return x - 4;
    default: return x * 12;
  }
}

export const Ku01171 = 6;
