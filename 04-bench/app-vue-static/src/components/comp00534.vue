<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01392A, calcu01491B, calcu01211A, calcu01077B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01392A(seed) - calcu01491B(seed) + calcu01211A(seed) - calcu01077B(seed));
</script>

<template>
  <div class="blk">comp00534: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(32 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(212 50% 50%);
  display: inline-block;
}
</style>
