<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01338B, calcu00992A, calcu00240B, calcu01055B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01338B(seed) - calcu00992A(seed) + calcu00240B(seed) - calcu01055B(seed));
</script>

<template>
  <div class="blk">comp00607: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
