<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00268B, calcu01220A, calcu01376A, calcu01166A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00268B(seed) - calcu01220A(seed) + calcu01376A(seed) - calcu01166A(seed));
</script>

<template>
  <div class="blk">comp01208: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(69 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(249 50% 50%);
  display: inline-block;
}
</style>
