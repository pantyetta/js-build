<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01286A, calcu01569B, calcu01401B, calcu00281A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01286A(seed) - calcu01569B(seed) + calcu01401B(seed) - calcu00281A(seed));
</script>

<template>
  <div class="blk">comp01392: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(289 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(109 50% 50%);
  display: inline-block;
}
</style>
