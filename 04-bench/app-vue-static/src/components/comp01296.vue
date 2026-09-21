<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00143B, calcu00858A, calcu00050B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00143B(seed) - calcu00858A(seed) + calcu00050B(seed));
</script>

<template>
  <div class="blk">comp01296: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
