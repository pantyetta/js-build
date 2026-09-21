<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00684A, calcu00017A, calcu00853A, calcu00532B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00684A(seed) - calcu00017A(seed) + calcu00853A(seed) - calcu00532B(seed));
</script>

<template>
  <div class="blk">comp00922: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(341 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(161 50% 50%);
  display: inline-block;
}
</style>
