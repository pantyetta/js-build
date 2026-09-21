<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00537A, calcu00431B, calcu00735B, calcu01463B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00537A(seed) - calcu00431B(seed) + calcu00735B(seed) - calcu01463B(seed));
</script>

<template>
  <div class="blk">comp00843: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(208 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(28 50% 50%);
  display: inline-block;
}
</style>
