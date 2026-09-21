// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00191A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 3;
  } catch (e) {
    return 27;
  }
}

export function calcu00191B(x) {
  switch (x % 6) {
    case 0: return x + 8;
    case 1: return x - 3;
    default: return x * 27;
  }
}

export const Ku00191 = 987;
