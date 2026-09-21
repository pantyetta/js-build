<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00553B, calcu00774A, calcu00601A, calcu01294A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00553B(seed) - calcu00774A(seed) + calcu00601A(seed) - calcu01294A(seed));
</script>

<template>
  <div class="blk">comp01611: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
