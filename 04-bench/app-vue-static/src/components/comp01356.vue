<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00087A, calcu00516A, calcu01412A, calcu01579A, calcu00188A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00087A(seed) - calcu00516A(seed) + calcu01412A(seed) - calcu01579A(seed) + calcu00188A(seed));
</script>

<template>
  <div class="blk">comp01356: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
