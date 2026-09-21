<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00696A, calcu01145B, calcu00381A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00696A(seed) - calcu01145B(seed) + calcu00381A(seed));
</script>

<template>
  <div class="blk">comp00077: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>
