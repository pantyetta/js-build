// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00838A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 21;
  } catch (e) {
    return 19;
  }
}

export function calcu00838B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 21;
    default: return x * 19;
  }
}

export const Ku00838 = 425;
