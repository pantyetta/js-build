<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00276A, calcu00898B, calcu01194B, calcu01090B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00276A(seed) - calcu00898B(seed) + calcu01194B(seed) - calcu01090B(seed));
</script>

<template>
  <div class="blk">comp01633: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(174 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(354 50% 50%);
  display: inline-block;
}
</style>
