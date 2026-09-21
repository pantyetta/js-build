<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01586B, calcu01382B, calcu00799A, calcu00071B, calcu00510B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01586B(seed) - calcu01382B(seed) + calcu00799A(seed) - calcu00071B(seed) + calcu00510B(seed));
</script>

<template>
  <div class="blk">comp00593: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(208 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(28 50% 50%);
  display: inline-block;
}
</style>
