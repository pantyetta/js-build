<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01101A, calcu00916A, calcu01163B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01101A(seed) - calcu00916A(seed) + calcu01163B(seed));
</script>

<template>
  <div class="blk">comp00805: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(275 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(95 50% 50%);
  display: inline-block;
}
</style>
