<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00339A, calcu00491B, calcu00933A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00339A(seed) - calcu00491B(seed) + calcu00933A(seed));
</script>

<template>
  <div class="blk">comp01290: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
