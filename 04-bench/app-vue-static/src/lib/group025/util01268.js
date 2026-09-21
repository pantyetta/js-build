// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01268A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 26;
  } catch (e) {
    return 13;
  }
}

export function calcu01268B(x) {
  switch (x % 4) {
    case 0: return x + 17;
    case 1: return x - 26;
    default: return x * 13;
  }
}

export const Ku01268 = 297;
