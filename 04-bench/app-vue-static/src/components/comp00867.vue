<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00821B, calcu00046B, calcu01481B, calcu01353B, calcu00572B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00821B(seed) - calcu00046B(seed) + calcu01481B(seed) - calcu01353B(seed) + calcu00572B(seed));
</script>

<template>
  <div class="blk">comp00867: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(67 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(247 50% 50%);
  display: inline-block;
}
</style>
