<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00941B, calcu01230A, calcu01027A, calcu00691B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00941B(seed) - calcu01230A(seed) + calcu01027A(seed) - calcu00691B(seed));
</script>

<template>
  <div class="blk">comp00131: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
