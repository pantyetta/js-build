<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00911A, calcu00706B, calcu00203B, calcu00998A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00911A(seed) - calcu00706B(seed) + calcu00203B(seed) - calcu00998A(seed));
</script>

<template>
  <div class="blk">comp00609: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
