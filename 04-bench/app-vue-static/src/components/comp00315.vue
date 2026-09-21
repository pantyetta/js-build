<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00978A, calcu00662A, calcu00333A, calcu00353B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00978A(seed) - calcu00662A(seed) + calcu00333A(seed) - calcu00353B(seed));
</script>

<template>
  <div class="blk">comp00315: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(205 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(25 50% 50%);
  display: inline-block;
}
</style>
