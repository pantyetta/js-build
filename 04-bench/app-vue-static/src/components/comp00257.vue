<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00253B, calcu00896A, calcu00753B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00253B(seed) - calcu00896A(seed) + calcu00753B(seed));
</script>

<template>
  <div class="blk">comp00257: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>
