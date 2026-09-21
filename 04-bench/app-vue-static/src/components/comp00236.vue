<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01334A, calcu00261B, calcu01122B, calcu00556B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01334A(seed) - calcu00261B(seed) + calcu01122B(seed) - calcu00556B(seed));
</script>

<template>
  <div class="blk">comp00236: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(46 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(226 50% 50%);
  display: inline-block;
}
</style>
