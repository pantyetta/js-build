<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00461B, calcu01397B, calcu00248A, calcu01471A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00461B(seed) - calcu01397B(seed) + calcu00248A(seed) - calcu01471A(seed));
</script>

<template>
  <div class="blk">comp00439: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
