// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00435A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 17;
  } catch (e) {
    return 6;
  }
}

export function calcu00435B(x) {
  switch (x % 6) {
    case 0: return x + 15;
    case 1: return x - 17;
    default: return x * 6;
  }
}

export const Ku00435 = 57;
