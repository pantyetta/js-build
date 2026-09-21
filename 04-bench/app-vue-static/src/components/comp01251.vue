<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00578A, calcu01233A, calcu00086B, calcu00859A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00578A(seed) - calcu01233A(seed) + calcu00086B(seed) - calcu00859A(seed));
</script>

<template>
  <div class="blk">comp01251: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(182 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(2 50% 50%);
  display: inline-block;
}
</style>
