<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00652A, calcu00667B, calcu00640B, calcu00333B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00652A(seed) - calcu00667B(seed) + calcu00640B(seed) - calcu00333B(seed));
</script>

<template>
  <div class="blk">comp01338: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
