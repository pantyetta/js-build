<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01291A, calcu00671B, calcu00534B, calcu00054B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01291A(seed) - calcu00671B(seed) + calcu00534B(seed) - calcu00054B(seed));
</script>

<template>
  <div class="blk">comp01196: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(278 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(98 50% 50%);
  display: inline-block;
}
</style>
