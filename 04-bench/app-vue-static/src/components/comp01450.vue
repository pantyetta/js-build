<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00167A, calcu01269B, calcu00813A, calcu00158B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00167A(seed) - calcu01269B(seed) + calcu00813A(seed) - calcu00158B(seed));
</script>

<template>
  <div class="blk">comp01450: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(22 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(202 50% 50%);
  display: inline-block;
}
</style>
