<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00205A, calcu00856B, calcu00629B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00205A(seed) - calcu00856B(seed) + calcu00629B(seed));
</script>

<template>
  <div class="blk">comp00187: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
