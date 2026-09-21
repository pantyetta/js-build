<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00513A, calcu00370B, calcu00235B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00513A(seed) - calcu00370B(seed) + calcu00235B(seed));
</script>

<template>
  <div class="blk">comp01164: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
