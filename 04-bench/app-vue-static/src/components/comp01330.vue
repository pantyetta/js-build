<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01471B, calcu00287A, calcu00892A, calcu00078B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01471B(seed) - calcu00287A(seed) + calcu00892A(seed) - calcu00078B(seed));
</script>

<template>
  <div class="blk">comp01330: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(347 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(167 50% 50%);
  display: inline-block;
}
</style>
