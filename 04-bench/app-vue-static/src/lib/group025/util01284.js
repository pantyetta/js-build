// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01284A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 5;
  } catch (e) {
    return 22;
  }
}

export function calcu01284B(x) {
  switch (x % 5) {
    case 0: return x + 14;
    case 1: return x - 5;
    default: return x * 22;
  }
}

export const Ku01284 = 269;
