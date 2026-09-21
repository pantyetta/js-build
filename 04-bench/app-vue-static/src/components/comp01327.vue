<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00744B, calcu00459A, calcu00558B, calcu00350B, calcu00153B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00744B(seed) - calcu00459A(seed) + calcu00558B(seed) - calcu00350B(seed) + calcu00153B(seed));
</script>

<template>
  <div class="blk">comp01327: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(212 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(32 50% 50%);
  display: inline-block;
}
</style>
