<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00158A, calcu01324B, calcu00737A, calcu00917B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00158A(seed) - calcu01324B(seed) + calcu00737A(seed) - calcu00917B(seed));
</script>

<template>
  <div class="blk">comp01590: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>
