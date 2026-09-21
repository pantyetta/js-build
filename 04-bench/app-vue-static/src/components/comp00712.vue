<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00916B, calcu00729A, calcu01076B, calcu00505B, calcu00943B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00916B(seed) - calcu00729A(seed) + calcu01076B(seed) - calcu00505B(seed) + calcu00943B(seed));
</script>

<template>
  <div class="blk">comp00712: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>
