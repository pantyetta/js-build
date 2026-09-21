<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00631B, calcu01522B, calcu00780B, calcu00341B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00631B(seed) - calcu01522B(seed) + calcu00780B(seed) - calcu00341B(seed));
</script>

<template>
  <div class="blk">comp00486: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(141 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(321 50% 50%);
  display: inline-block;
}
</style>
