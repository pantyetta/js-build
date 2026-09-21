<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00068B, calcu01286A, calcu00707A, calcu00807B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00068B(seed) - calcu01286A(seed) + calcu00707A(seed) - calcu00807B(seed));
</script>

<template>
  <div class="blk">comp00169: {{ total }}</div>
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
