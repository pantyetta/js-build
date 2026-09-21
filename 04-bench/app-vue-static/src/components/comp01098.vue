<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01540A, calcu00312A, calcu00286B, calcu00744B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01540A(seed) - calcu00312A(seed) + calcu00286B(seed) - calcu00744B(seed));
</script>

<template>
  <div class="blk">comp01098: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(114 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(294 50% 50%);
  display: inline-block;
}
</style>
