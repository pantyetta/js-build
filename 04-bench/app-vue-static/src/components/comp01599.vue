<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00107A, calcu01381B, calcu00985A, calcu01229A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00107A(seed) - calcu01381B(seed) + calcu00985A(seed) - calcu01229A(seed));
</script>

<template>
  <div class="blk">comp01599: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>
