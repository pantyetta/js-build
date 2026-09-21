<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00200B, calcu00999B, calcu00631A, calcu01102A, calcu00695B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00200B(seed) - calcu00999B(seed) + calcu00631A(seed) - calcu01102A(seed) + calcu00695B(seed));
</script>

<template>
  <div class="blk">comp00634: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
