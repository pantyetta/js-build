<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00187A, calcu00172A, calcu00791B, calcu01196B, calcu01008A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00187A(seed) - calcu00172A(seed) + calcu00791B(seed) - calcu01196B(seed) + calcu01008A(seed));
</script>

<template>
  <div class="blk">comp00501: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(117 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(297 50% 50%);
  display: inline-block;
}
</style>
