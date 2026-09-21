<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00445A, calcu01461B, calcu00586B, calcu00365B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00445A(seed) - calcu01461B(seed) + calcu00586B(seed) - calcu00365B(seed));
</script>

<template>
  <div class="blk">comp00110: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
