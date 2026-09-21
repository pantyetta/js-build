<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00254A, calcu00844A, calcu01522A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00254A(seed) - calcu00844A(seed) + calcu01522A(seed));
</script>

<template>
  <div class="blk">comp01398: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(316 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(136 50% 50%);
  display: inline-block;
}
</style>
