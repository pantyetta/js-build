<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00545B, calcu00956A, calcu00779A, calcu01183A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00545B(seed) - calcu00956A(seed) + calcu00779A(seed) - calcu01183A(seed));
</script>

<template>
  <div class="blk">comp01758: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(106 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(286 50% 50%);
  display: inline-block;
}
</style>
