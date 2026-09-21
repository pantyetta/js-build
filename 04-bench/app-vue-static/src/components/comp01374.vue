<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00975A, calcu00249A, calcu00929A, calcu00173A, calcu00036A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00975A(seed) - calcu00249A(seed) + calcu00929A(seed) - calcu00173A(seed) + calcu00036A(seed));
</script>

<template>
  <div class="blk">comp01374: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(170 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(350 50% 50%);
  display: inline-block;
}
</style>
