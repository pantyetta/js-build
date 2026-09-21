<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00624B, calcu01010B, calcu00139A, calcu00178B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00624B(seed) - calcu01010B(seed) + calcu00139A(seed) - calcu00178B(seed));
</script>

<template>
  <div class="blk">comp01719: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
