<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01572B, calcu01345B, calcu00932B, calcu00754B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01572B(seed) - calcu01345B(seed) + calcu00932B(seed) - calcu00754B(seed));
</script>

<template>
  <div class="blk">comp01288: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
