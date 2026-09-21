<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01441B, calcu01170B, calcu00386A, calcu00719B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01441B(seed) - calcu01170B(seed) + calcu00386A(seed) - calcu00719B(seed));
</script>

<template>
  <div class="blk">comp00598: {{ total }}</div>
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
