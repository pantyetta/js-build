// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01446A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 23;
  } catch (e) {
    return 17;
  }
}

export function calcu01446B(x) {
  switch (x % 6) {
    case 0: return x + 2;
    case 1: return x - 23;
    default: return x * 17;
  }
}

export const Ku01446 = 933;
