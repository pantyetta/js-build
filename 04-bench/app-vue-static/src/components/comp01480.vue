<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01098A, calcu01416A, calcu01478A, calcu00874B, calcu00395A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01098A(seed) - calcu01416A(seed) + calcu01478A(seed) - calcu00874B(seed) + calcu00395A(seed));
</script>

<template>
  <div class="blk">comp01480: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
