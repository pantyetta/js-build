<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00334B, calcu01127B, calcu00354A, calcu00810A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00334B(seed) - calcu01127B(seed) + calcu00354A(seed) - calcu00810A(seed));
</script>

<template>
  <div class="blk">comp01420: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
