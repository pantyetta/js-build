<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00577A, calcu01423A, calcu01127A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00577A(seed) - calcu01423A(seed) + calcu01127A(seed));
</script>

<template>
  <div class="blk">comp01985: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(44 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(224 50% 50%);
  display: inline-block;
}
</style>
