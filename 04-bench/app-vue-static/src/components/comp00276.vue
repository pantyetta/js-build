<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00254A, calcu00246A, calcu00358B, calcu01209B, calcu00674A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00254A(seed) - calcu00246A(seed) + calcu00358B(seed) - calcu01209B(seed) + calcu00674A(seed));
</script>

<template>
  <div class="blk">comp00276: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>
