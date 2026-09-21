// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00186A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 18;
  } catch (e) {
    return 22;
  }
}

export function calcu00186B(x) {
  switch (x % 5) {
    case 0: return x + 11;
    case 1: return x - 18;
    default: return x * 22;
  }
}

export const Ku00186 = 227;
