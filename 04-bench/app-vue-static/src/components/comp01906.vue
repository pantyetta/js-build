<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01416B, calcu01032B, calcu00482A, calcu00784B, calcu01354B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01416B(seed) - calcu01032B(seed) + calcu00482A(seed) - calcu00784B(seed) + calcu01354B(seed));
</script>

<template>
  <div class="blk">comp01906: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(226 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(46 50% 50%);
  display: inline-block;
}
</style>
