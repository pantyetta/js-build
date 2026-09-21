<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01511B, calcu01582B, calcu00962B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01511B(seed) - calcu01582B(seed) + calcu00962B(seed));
</script>

<template>
  <div class="blk">comp01874: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(185 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(5 50% 50%);
  display: inline-block;
}
</style>
