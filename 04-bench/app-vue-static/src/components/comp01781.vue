<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00189B, calcu00942B, calcu01471A, calcu00882A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00189B(seed) - calcu00942B(seed) + calcu01471A(seed) - calcu00882A(seed));
</script>

<template>
  <div class="blk">comp01781: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(292 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(112 50% 50%);
  display: inline-block;
}
</style>
