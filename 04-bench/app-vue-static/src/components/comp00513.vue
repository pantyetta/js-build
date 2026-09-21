<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01419A, calcu00549B, calcu00005B, calcu00177B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01419A(seed) - calcu00549B(seed) + calcu00005B(seed) - calcu00177B(seed));
</script>

<template>
  <div class="blk">comp00513: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(173 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(353 50% 50%);
  display: inline-block;
}
</style>
