<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00146B, calcu01337A, calcu00050A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00146B(seed) - calcu01337A(seed) + calcu00050A(seed));
</script>

<template>
  <div class="blk">comp01460: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(272 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(92 50% 50%);
  display: inline-block;
}
</style>
