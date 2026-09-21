<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00151A, calcu00215B, calcu00642B, calcu00117A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00151A(seed) - calcu00215B(seed) + calcu00642B(seed) - calcu00117A(seed));
</script>

<template>
  <div class="blk">comp00942: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(251 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(71 50% 50%);
  display: inline-block;
}
</style>
