// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00587A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 6;
  } catch (e) {
    return 29;
  }
}

export function calcu00587B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 6;
    default: return x * 29;
  }
}

export const Ku00587 = 864;
