<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00718A, calcu01407A, calcu00614A, calcu01138B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00718A(seed) - calcu01407A(seed) + calcu00614A(seed) - calcu01138B(seed));
</script>

<template>
  <div class="blk">comp00703: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
