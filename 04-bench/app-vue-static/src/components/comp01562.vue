<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00045A, calcu01333B, calcu00493A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00045A(seed) - calcu01333B(seed) + calcu00493A(seed));
</script>

<template>
  <div class="blk">comp01562: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(60 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(240 50% 50%);
  display: inline-block;
}
</style>
