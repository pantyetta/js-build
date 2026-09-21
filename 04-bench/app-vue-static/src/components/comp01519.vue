<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01214A, calcu00503B, calcu00212A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01214A(seed) - calcu00503B(seed) + calcu00212A(seed));
</script>

<template>
  <div class="blk">comp01519: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
