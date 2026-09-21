<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00013A, calcu00598B, calcu00131B, calcu00171A, calcu00208B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00013A(seed) - calcu00598B(seed) + calcu00131B(seed) - calcu00171A(seed) + calcu00208B(seed));
</script>

<template>
  <div class="blk">comp00047: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
