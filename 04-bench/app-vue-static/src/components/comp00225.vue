<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01198A, calcu00827A, calcu01278A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01198A(seed) - calcu00827A(seed) + calcu01278A(seed));
</script>

<template>
  <div class="blk">comp00225: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
