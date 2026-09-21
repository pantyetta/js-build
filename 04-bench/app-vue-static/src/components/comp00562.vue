<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00996A, calcu00957B, calcu00703B, calcu00571B, calcu01025B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00996A(seed) - calcu00957B(seed) + calcu00703B(seed) - calcu00571B(seed) + calcu01025B(seed));
</script>

<template>
  <div class="blk">comp00562: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>
