// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01402A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 27;
  } catch (e) {
    return 16;
  }
}

export function calcu01402B(x) {
  switch (x % 7) {
    case 0: return x + 18;
    case 1: return x - 27;
    default: return x * 16;
  }
}

export const Ku01402 = 172;
