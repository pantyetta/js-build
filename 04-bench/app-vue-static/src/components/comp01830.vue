<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00973B, calcu00006A, calcu00326A, calcu00604A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00973B(seed) - calcu00006A(seed) + calcu00326A(seed) - calcu00604A(seed));
</script>

<template>
  <div class="blk">comp01830: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(222 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(42 50% 50%);
  display: inline-block;
}
</style>
