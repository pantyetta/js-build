<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00663B, calcu00639A, calcu01003A, calcu01269B, calcu00647B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00663B(seed) - calcu00639A(seed) + calcu01003A(seed) - calcu01269B(seed) + calcu00647B(seed));
</script>

<template>
  <div class="blk">comp01928: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(95 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(275 50% 50%);
  display: inline-block;
}
</style>
