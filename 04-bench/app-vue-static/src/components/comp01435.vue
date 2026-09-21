<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01083A, calcu00598B, calcu01256A, calcu00978B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01083A(seed) - calcu00598B(seed) + calcu01256A(seed) - calcu00978B(seed));
</script>

<template>
  <div class="blk">comp01435: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(201 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(21 50% 50%);
  display: inline-block;
}
</style>
