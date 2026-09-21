<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01525A, calcu00860B, calcu00066A, calcu01313B, calcu01326A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01525A(seed) - calcu00860B(seed) + calcu00066A(seed) - calcu01313B(seed) + calcu01326A(seed));
</script>

<template>
  <div class="blk">comp00394: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
