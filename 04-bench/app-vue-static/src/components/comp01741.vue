<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00643A, calcu00800B, calcu01328B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00643A(seed) - calcu00800B(seed) + calcu01328B(seed));
</script>

<template>
  <div class="blk">comp01741: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(168 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(348 50% 50%);
  display: inline-block;
}
</style>
