<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01134B, calcu00317B, calcu01355B, calcu01153A, calcu01270A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01134B(seed) - calcu00317B(seed) + calcu01355B(seed) - calcu01153A(seed) + calcu01270A(seed));
</script>

<template>
  <div class="blk">comp01044: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
