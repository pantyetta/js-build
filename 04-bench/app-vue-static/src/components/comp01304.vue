<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00951B, calcu01149B, calcu00899A, calcu01333A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00951B(seed) - calcu01149B(seed) + calcu00899A(seed) - calcu01333A(seed));
</script>

<template>
  <div class="blk">comp01304: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(55 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(235 50% 50%);
  display: inline-block;
}
</style>
