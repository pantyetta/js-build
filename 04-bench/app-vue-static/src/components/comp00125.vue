<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00732A, calcu00782B, calcu01424A, calcu00258A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00732A(seed) - calcu00782B(seed) + calcu01424A(seed) - calcu00258A(seed));
</script>

<template>
  <div class="blk">comp00125: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(161 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(341 50% 50%);
  display: inline-block;
}
</style>
