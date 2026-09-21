// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01037 {
  static compute(x) {
    return x * 7 + 31;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01037A(x) {
  return Helperu01037.compute(x) + new Helperu01037().double;
}

export function calcu01037B(x) {
  return Helperu01037.compute(x) - 9;
}

export const Ku01037 = 139;
