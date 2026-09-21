<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00357A, calcu01120B, calcu00885A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00357A(seed) - calcu01120B(seed) + calcu00885A(seed));
</script>

<template>
  <div class="blk">comp01306: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>
