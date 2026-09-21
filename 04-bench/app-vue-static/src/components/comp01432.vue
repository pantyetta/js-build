<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00888B, calcu01075B, calcu01405A, calcu00538B, calcu00006B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00888B(seed) - calcu01075B(seed) + calcu01405A(seed) - calcu00538B(seed) + calcu00006B(seed));
</script>

<template>
  <div class="blk">comp01432: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
