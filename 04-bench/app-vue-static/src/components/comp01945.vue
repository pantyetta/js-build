<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00578B, calcu00373B, calcu00968B, calcu00066B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00578B(seed) - calcu00373B(seed) + calcu00968B(seed) - calcu00066B(seed));
</script>

<template>
  <div class="blk">comp01945: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>
