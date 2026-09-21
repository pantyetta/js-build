<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00767B, calcu01278A, calcu00444A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00767B(seed) - calcu01278A(seed) + calcu00444A(seed));
</script>

<template>
  <div class="blk">comp00311: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(136 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(316 50% 50%);
  display: inline-block;
}
</style>
