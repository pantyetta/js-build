<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00460B, calcu00235B, calcu00642B, calcu01328A, calcu00734B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00460B(seed) - calcu00235B(seed) + calcu00642B(seed) - calcu01328A(seed) + calcu00734B(seed));
</script>

<template>
  <div class="blk">comp01726: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(275 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(95 50% 50%);
  display: inline-block;
}
</style>
