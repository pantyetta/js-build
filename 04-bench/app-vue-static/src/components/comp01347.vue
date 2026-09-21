<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00523A, calcu00029B, calcu01490B, calcu01339A, calcu01109B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00523A(seed) - calcu00029B(seed) + calcu01490B(seed) - calcu01339A(seed) + calcu01109B(seed));
</script>

<template>
  <div class="blk">comp01347: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(124 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(304 50% 50%);
  display: inline-block;
}
</style>
