<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00212B, calcu01545B, calcu01452A, calcu00975A, calcu00494B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00212B(seed) - calcu01545B(seed) + calcu01452A(seed) - calcu00975A(seed) + calcu00494B(seed));
</script>

<template>
  <div class="blk">comp00940: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(230 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(50 50% 50%);
  display: inline-block;
}
</style>
