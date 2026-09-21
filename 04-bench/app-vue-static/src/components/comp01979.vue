<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00863A, calcu01329B, calcu00300A, calcu01029B, calcu01530A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00863A(seed) - calcu01329B(seed) + calcu00300A(seed) - calcu01029B(seed) + calcu01530A(seed));
</script>

<template>
  <div class="blk">comp01979: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(155 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(335 50% 50%);
  display: inline-block;
}
</style>
