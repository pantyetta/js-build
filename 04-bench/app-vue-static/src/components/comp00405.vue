<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00944B, calcu00921A, calcu00256A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00944B(seed) - calcu00921A(seed) + calcu00256A(seed));
</script>

<template>
  <div class="blk">comp00405: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(185 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(5 50% 50%);
  display: inline-block;
}
</style>
