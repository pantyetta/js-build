<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00585B, calcu00611B, calcu01358B, calcu00888A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00585B(seed) - calcu00611B(seed) + calcu01358B(seed) - calcu00888A(seed));
</script>

<template>
  <div class="blk">comp01891: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
