<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00339B, calcu00689B, calcu00925B, calcu00808A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00339B(seed) - calcu00689B(seed) + calcu00925B(seed) - calcu00808A(seed));
</script>

<template>
  <div class="blk">comp01324: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>
