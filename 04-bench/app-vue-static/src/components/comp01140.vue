<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00088A, calcu00171A, calcu00414B, calcu00706B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00088A(seed) - calcu00171A(seed) + calcu00414B(seed) - calcu00706B(seed));
</script>

<template>
  <div class="blk">comp01140: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
