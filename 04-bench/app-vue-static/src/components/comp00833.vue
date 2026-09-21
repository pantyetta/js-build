<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00405B, calcu00157A, calcu00049A, calcu00929B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00405B(seed) - calcu00157A(seed) + calcu00049A(seed) - calcu00929B(seed));
</script>

<template>
  <div class="blk">comp00833: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>
