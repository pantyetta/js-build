<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00569A, calcu00579B, calcu00294B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00569A(seed) - calcu00579B(seed) + calcu00294B(seed));
</script>

<template>
  <div class="blk">comp00009: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(238 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(58 50% 50%);
  display: inline-block;
}
</style>
