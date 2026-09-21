<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00736B, calcu01561B, calcu01577B, calcu00955A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00736B(seed) - calcu01561B(seed) + calcu01577B(seed) - calcu00955A(seed));
</script>

<template>
  <div class="blk">comp00011: {{ total }}</div>
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
