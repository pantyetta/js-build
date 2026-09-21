<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01111B, calcu00574A, calcu01541A, calcu01501A, calcu01332B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01111B(seed) - calcu00574A(seed) + calcu01541A(seed) - calcu01501A(seed) + calcu01332B(seed));
</script>

<template>
  <div class="blk">comp01341: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(97 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(277 50% 50%);
  display: inline-block;
}
</style>
