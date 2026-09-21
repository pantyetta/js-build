// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01061A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 7;
  } catch (e) {
    return 11;
  }
}

export function calcu01061B(x) {
  switch (x % 5) {
    case 0: return x + 17;
    case 1: return x - 7;
    default: return x * 11;
  }
}

export const Ku01061 = 507;
