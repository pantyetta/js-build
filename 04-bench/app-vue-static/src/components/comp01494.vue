<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01030A, calcu00562A, calcu00374A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01030A(seed) - calcu00562A(seed) + calcu00374A(seed));
</script>

<template>
  <div class="blk">comp01494: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
