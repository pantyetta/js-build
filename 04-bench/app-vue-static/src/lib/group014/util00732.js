// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00732A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 21;
  } catch (e) {
    return 14;
  }
}

export function calcu00732B(x) {
  switch (x % 6) {
    case 0: return x + 11;
    case 1: return x - 21;
    default: return x * 14;
  }
}

export const Ku00732 = 100;
