<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01185B, calcu01479A, calcu00610A, calcu01585A, calcu00138B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01185B(seed) - calcu01479A(seed) + calcu00610A(seed) - calcu01585A(seed) + calcu00138B(seed));
</script>

<template>
  <div class="blk">comp01789: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(2 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(182 50% 50%);
  display: inline-block;
}
</style>
