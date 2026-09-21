<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00886A, calcu00562A, calcu00659A, calcu00048A, calcu01110B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00886A(seed) - calcu00562A(seed) + calcu00659A(seed) - calcu00048A(seed) + calcu01110B(seed));
</script>

<template>
  <div class="blk">comp01823: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
