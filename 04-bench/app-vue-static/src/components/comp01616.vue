<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00799B, calcu00403A, calcu00915A, calcu01438A, calcu01196B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00799B(seed) - calcu00403A(seed) + calcu00915A(seed) - calcu01438A(seed) + calcu01196B(seed));
</script>

<template>
  <div class="blk">comp01616: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
