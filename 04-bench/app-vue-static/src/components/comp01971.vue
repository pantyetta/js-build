<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00809A, calcu00804A, calcu01251A, calcu00735B, calcu00678A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00809A(seed) - calcu00804A(seed) + calcu01251A(seed) - calcu00735B(seed) + calcu00678A(seed));
</script>

<template>
  <div class="blk">comp01971: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(251 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(71 50% 50%);
  display: inline-block;
}
</style>
