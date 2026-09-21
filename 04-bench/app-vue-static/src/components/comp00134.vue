<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01452B, calcu00629A, calcu00832B, calcu01294B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01452B(seed) - calcu00629A(seed) + calcu00832B(seed) - calcu01294B(seed));
</script>

<template>
  <div class="blk">comp00134: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
