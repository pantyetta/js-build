<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00341B, calcu00062A, calcu01331A, calcu00524B, calcu00533B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00341B(seed) - calcu00062A(seed) + calcu01331A(seed) - calcu00524B(seed) + calcu00533B(seed));
</script>

<template>
  <div class="blk">comp01844: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
