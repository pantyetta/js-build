<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00477B, calcu01392B, calcu00282B, calcu00151B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00477B(seed) - calcu01392B(seed) + calcu00282B(seed) - calcu00151B(seed));
</script>

<template>
  <div class="blk">comp01011: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(237 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(57 50% 50%);
  display: inline-block;
}
</style>
