// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00638A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 22;
  } catch (e) {
    return 26;
  }
}

export function calcu00638B(x) {
  switch (x % 7) {
    case 0: return x + 8;
    case 1: return x - 22;
    default: return x * 26;
  }
}

export const Ku00638 = 386;
