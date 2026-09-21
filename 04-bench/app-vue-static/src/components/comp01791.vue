<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00395A, calcu01239B, calcu00586A, calcu00569B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00395A(seed) - calcu01239B(seed) + calcu00586A(seed) - calcu00569B(seed));
</script>

<template>
  <div class="blk">comp01791: {{ total }}</div>
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
