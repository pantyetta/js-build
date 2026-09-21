<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01414B, calcu01495B, calcu01584B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01414B(seed) - calcu01495B(seed) + calcu01584B(seed));
</script>

<template>
  <div class="blk">comp01096: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>
