<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00841B, calcu01320A, calcu00716B, calcu01187A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00841B(seed) - calcu01320A(seed) + calcu00716B(seed) - calcu01187A(seed));
</script>

<template>
  <div class="blk">comp01836: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(99 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(279 50% 50%);
  display: inline-block;
}
</style>
