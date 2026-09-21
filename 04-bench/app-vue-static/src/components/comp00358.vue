<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00772B, calcu01393A, calcu00512A, calcu00502B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00772B(seed) - calcu01393A(seed) + calcu00512A(seed) - calcu00502B(seed));
</script>

<template>
  <div class="blk">comp00358: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(170 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(350 50% 50%);
  display: inline-block;
}
</style>
