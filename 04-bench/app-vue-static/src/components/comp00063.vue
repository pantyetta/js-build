<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00350A, calcu01017B, calcu00812A, calcu00436A, calcu00079B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00350A(seed) - calcu01017B(seed) + calcu00812A(seed) - calcu00436A(seed) + calcu00079B(seed));
</script>

<template>
  <div class="blk">comp00063: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(34 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(214 50% 50%);
  display: inline-block;
}
</style>
