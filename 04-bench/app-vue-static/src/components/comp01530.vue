<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00511B, calcu01136A, calcu00251B, calcu01023B, calcu01206B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00511B(seed) - calcu01136A(seed) + calcu00251B(seed) - calcu01023B(seed) + calcu01206B(seed));
</script>

<template>
  <div class="blk">comp01530: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>
