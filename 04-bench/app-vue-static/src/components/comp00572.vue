<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01579B, calcu00580A, calcu00729B, calcu01530B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01579B(seed) - calcu00580A(seed) + calcu00729B(seed) - calcu01530B(seed));
</script>

<template>
  <div class="blk">comp00572: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>
