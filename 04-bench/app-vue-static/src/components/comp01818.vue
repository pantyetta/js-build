<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00100A, calcu00098A, calcu00381B, calcu00887A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00100A(seed) - calcu00098A(seed) + calcu00381B(seed) - calcu00887A(seed));
</script>

<template>
  <div class="blk">comp01818: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
