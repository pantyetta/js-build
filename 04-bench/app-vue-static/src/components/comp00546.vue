<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00664B, calcu00993B, calcu01493A, calcu00617A, calcu01236A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00664B(seed) - calcu00993B(seed) + calcu01493A(seed) - calcu00617A(seed) + calcu01236A(seed));
</script>

<template>
  <div class="blk">comp00546: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(272 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(92 50% 50%);
  display: inline-block;
}
</style>
