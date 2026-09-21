// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01132A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 1;
  } catch (e) {
    return 25;
  }
}

export function calcu01132B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 1;
    default: return x * 25;
  }
}

export const Ku01132 = 555;
