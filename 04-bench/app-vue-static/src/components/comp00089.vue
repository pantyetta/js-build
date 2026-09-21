<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00283B, calcu00479A, calcu00954B, calcu00497B, calcu00102A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00283B(seed) - calcu00479A(seed) + calcu00954B(seed) - calcu00497B(seed) + calcu00102A(seed));
</script>

<template>
  <div class="blk">comp00089: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(251 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(71 50% 50%);
  display: inline-block;
}
</style>
