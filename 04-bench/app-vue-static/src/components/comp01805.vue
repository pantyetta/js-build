<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01004B, calcu00197A, calcu00572B, calcu00320B, calcu00955A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01004B(seed) - calcu00197A(seed) + calcu00572B(seed) - calcu00320B(seed) + calcu00955A(seed));
</script>

<template>
  <div class="blk">comp01805: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>
