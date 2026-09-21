<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00766B, calcu01565B, calcu00512B, calcu01291B, calcu00589A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00766B(seed) - calcu01565B(seed) + calcu00512B(seed) - calcu01291B(seed) + calcu00589A(seed));
</script>

<template>
  <div class="blk">comp00679: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(151 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(331 50% 50%);
  display: inline-block;
}
</style>
