// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00464A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 5;
  } catch (e) {
    return 17;
  }
}

export function calcu00464B(x) {
  switch (x % 3) {
    case 0: return x + 8;
    case 1: return x - 5;
    default: return x * 17;
  }
}

export const Ku00464 = 321;
