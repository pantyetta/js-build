<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00118A, calcu00401A, calcu01455B, calcu01335B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00118A(seed) - calcu00401A(seed) + calcu01455B(seed) - calcu01335B(seed));
</script>

<template>
  <div class="blk">comp01510: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(291 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(111 50% 50%);
  display: inline-block;
}
</style>
