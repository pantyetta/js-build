<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00546B, calcu00076A, calcu00354B, calcu00016A, calcu00904A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00546B(seed) - calcu00076A(seed) + calcu00354B(seed) - calcu00016A(seed) + calcu00904A(seed));
</script>

<template>
  <div class="blk">comp01768: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(347 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(167 50% 50%);
  display: inline-block;
}
</style>
