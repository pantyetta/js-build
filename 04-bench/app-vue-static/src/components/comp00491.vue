<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00069B, calcu01120B, calcu00470B, calcu00114A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00069B(seed) - calcu01120B(seed) + calcu00470B(seed) - calcu00114A(seed));
</script>

<template>
  <div class="blk">comp00491: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
