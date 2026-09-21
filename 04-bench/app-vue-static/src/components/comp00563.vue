<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01069B, calcu01046B, calcu00183B, calcu00815A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01069B(seed) - calcu01046B(seed) + calcu00183B(seed) - calcu00815A(seed));
</script>

<template>
  <div class="blk">comp00563: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
