<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00869A, calcu00436B, calcu00236B, calcu01046B, calcu00320B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00869A(seed) - calcu00436B(seed) + calcu00236B(seed) - calcu01046B(seed) + calcu00320B(seed));
</script>

<template>
  <div class="blk">comp00419: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(121 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(301 50% 50%);
  display: inline-block;
}
</style>
