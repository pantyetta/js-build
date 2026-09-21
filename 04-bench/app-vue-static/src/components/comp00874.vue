<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01405A, calcu01194B, calcu00091B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01405A(seed) - calcu01194B(seed) + calcu00091B(seed));
</script>

<template>
  <div class="blk">comp00874: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>
