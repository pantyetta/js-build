<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00432A, calcu00430A, calcu00518A, calcu01517B, calcu01553B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00432A(seed) - calcu00430A(seed) + calcu00518A(seed) - calcu01517B(seed) + calcu01553B(seed));
</script>

<template>
  <div class="blk">comp01584: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
