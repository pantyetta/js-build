<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00638A, calcu01085B, calcu01499B, calcu00561B, calcu00463A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00638A(seed) - calcu01085B(seed) + calcu01499B(seed) - calcu00561B(seed) + calcu00463A(seed));
</script>

<template>
  <div class="blk">comp01936: {{ total }}</div>
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
