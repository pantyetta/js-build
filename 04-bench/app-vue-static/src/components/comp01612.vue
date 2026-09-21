<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00795A, calcu01161A, calcu00853A, calcu00384B, calcu00352A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00795A(seed) - calcu01161A(seed) + calcu00853A(seed) - calcu00384B(seed) + calcu00352A(seed));
</script>

<template>
  <div class="blk">comp01612: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(355 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(175 50% 50%);
  display: inline-block;
}
</style>
