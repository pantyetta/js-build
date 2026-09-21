<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00044A, calcu00377B, calcu00927A, calcu01177B, calcu01410A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00044A(seed) - calcu00377B(seed) + calcu00927A(seed) - calcu01177B(seed) + calcu01410A(seed));
</script>

<template>
  <div class="blk">comp00396: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>
