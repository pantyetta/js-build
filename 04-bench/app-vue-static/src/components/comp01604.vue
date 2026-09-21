<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01532A, calcu01368B, calcu00740B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01532A(seed) - calcu01368B(seed) + calcu00740B(seed));
</script>

<template>
  <div class="blk">comp01604: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(208 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(28 50% 50%);
  display: inline-block;
}
</style>
