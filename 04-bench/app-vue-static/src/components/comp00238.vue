<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00615B, calcu00876A, calcu00051A, calcu01300A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00615B(seed) - calcu00876A(seed) + calcu00051A(seed) - calcu01300A(seed));
</script>

<template>
  <div class="blk">comp00238: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
