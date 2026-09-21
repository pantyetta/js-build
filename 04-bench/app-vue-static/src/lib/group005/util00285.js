// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00285A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 10;
  } catch (e) {
    return 7;
  }
}

export function calcu00285B(x) {
  switch (x % 6) {
    case 0: return x + 18;
    case 1: return x - 10;
    default: return x * 7;
  }
}

export const Ku00285 = 476;
