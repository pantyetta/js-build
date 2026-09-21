<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00631A, calcu01323A, calcu00891B, calcu00277B, calcu01473A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00631A(seed) - calcu01323A(seed) + calcu00891B(seed) - calcu00277B(seed) + calcu01473A(seed));
</script>

<template>
  <div class="blk">comp01992: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(202 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(22 50% 50%);
  display: inline-block;
}
</style>
