<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00659A, calcu01249B, calcu01002B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00659A(seed) - calcu01249B(seed) + calcu01002B(seed));
</script>

<template>
  <div class="blk">comp00469: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(304 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(124 50% 50%);
  display: inline-block;
}
</style>
