<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00615B, calcu00014B, calcu00735B, calcu00443B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00615B(seed) - calcu00014B(seed) + calcu00735B(seed) - calcu00443B(seed));
</script>

<template>
  <div class="blk">comp00670: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
