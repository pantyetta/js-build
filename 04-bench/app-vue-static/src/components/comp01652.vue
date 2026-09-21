<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00187A, calcu00474A, calcu01236B, calcu00665B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00187A(seed) - calcu00474A(seed) + calcu01236B(seed) - calcu00665B(seed));
</script>

<template>
  <div class="blk">comp01652: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>
