// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01726A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 23;
  } catch (e) {
    return 17;
  }
}

export function calcu01726B(x) {
  switch (x % 7) {
    case 0: return x + 12;
    case 1: return x - 23;
    default: return x * 17;
  }
}

export const Ku01726 = 525;
