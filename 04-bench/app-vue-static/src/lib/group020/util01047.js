// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01047A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 19;
  } catch (e) {
    return 8;
  }
}

export function calcu01047B(x) {
  switch (x % 3) {
    case 0: return x + 5;
    case 1: return x - 19;
    default: return x * 8;
  }
}

export const Ku01047 = 727;
