<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00554B, calcu01518A, calcu00522B, calcu00029A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00554B(seed) - calcu01518A(seed) + calcu00522B(seed) - calcu00029A(seed));
</script>

<template>
  <div class="blk">comp00497: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(240 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(60 50% 50%);
  display: inline-block;
}
</style>
