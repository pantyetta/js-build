<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00381A, calcu00986A, calcu00121B, calcu00795A, calcu00031A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00381A(seed) - calcu00986A(seed) + calcu00121B(seed) - calcu00795A(seed) + calcu00031A(seed));
</script>

<template>
  <div class="blk">comp00229: {{ total }}</div>
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
