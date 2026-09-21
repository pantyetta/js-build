<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01317A, calcu01077B, calcu00052A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01317A(seed) - calcu01077B(seed) + calcu00052A(seed));
</script>

<template>
  <div class="blk">comp01713: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(280 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(100 50% 50%);
  display: inline-block;
}
</style>
