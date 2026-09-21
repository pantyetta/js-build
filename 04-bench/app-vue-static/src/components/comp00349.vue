<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580A, calcu00826A, calcu00458B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00580A(seed) - calcu00826A(seed) + calcu00458B(seed));
</script>

<template>
  <div class="blk">comp00349: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>
