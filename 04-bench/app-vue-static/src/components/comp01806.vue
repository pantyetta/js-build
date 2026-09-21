<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00869B, calcu01267A, calcu00229A, calcu01242A, calcu00721A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00869B(seed) - calcu01267A(seed) + calcu00229A(seed) - calcu01242A(seed) + calcu00721A(seed));
</script>

<template>
  <div class="blk">comp01806: {{ total }}</div>
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
