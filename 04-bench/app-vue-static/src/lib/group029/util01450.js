// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01450A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 17;
  } catch (e) {
    return 18;
  }
}

export function calcu01450B(x) {
  switch (x % 4) {
    case 0: return x + 3;
    case 1: return x - 17;
    default: return x * 18;
  }
}

export const Ku01450 = 689;
