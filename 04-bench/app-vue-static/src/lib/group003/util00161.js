// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00161A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 4;
  } catch (e) {
    return 13;
  }
}

export function calcu00161B(x) {
  switch (x % 7) {
    case 0: return x + 2;
    case 1: return x - 4;
    default: return x * 13;
  }
}

export const Ku00161 = 893;
