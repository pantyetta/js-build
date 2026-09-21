<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01012B, calcu00673A, calcu00670A, calcu00531A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01012B(seed) - calcu00673A(seed) + calcu00670A(seed) - calcu00531A(seed));
</script>

<template>
  <div class="blk">comp01000: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(210 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(30 50% 50%);
  display: inline-block;
}
</style>
