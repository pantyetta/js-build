<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00816B, calcu01584A, calcu01210B, calcu00709A, calcu00086A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00816B(seed) - calcu01584A(seed) + calcu01210B(seed) - calcu00709A(seed) + calcu00086A(seed));
</script>

<template>
  <div class="blk">comp01155: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(359 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(179 50% 50%);
  display: inline-block;
}
</style>
