<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00782A, calcu01358B, calcu00698A, calcu01091A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00782A(seed) - calcu01358B(seed) + calcu00698A(seed) - calcu01091A(seed));
</script>

<template>
  <div class="blk">comp01315: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(129 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(309 50% 50%);
  display: inline-block;
}
</style>
