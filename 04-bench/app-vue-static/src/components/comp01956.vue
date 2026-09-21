<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00300B, calcu01258B, calcu00423A, calcu01013A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00300B(seed) - calcu01258B(seed) + calcu00423A(seed) - calcu01013A(seed));
</script>

<template>
  <div class="blk">comp01956: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
