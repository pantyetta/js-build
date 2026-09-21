<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00773A, calcu00206B, calcu01251B, calcu01133A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00773A(seed) - calcu00206B(seed) + calcu01251B(seed) - calcu01133A(seed));
</script>

<template>
  <div class="blk">comp01619: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(240 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(60 50% 50%);
  display: inline-block;
}
</style>
