<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00728B, calcu00571B, calcu00112A, calcu00807B, calcu01387B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00728B(seed) - calcu00571B(seed) + calcu00112A(seed) - calcu00807B(seed) + calcu01387B(seed));
</script>

<template>
  <div class="blk">comp01408: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(317 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(137 50% 50%);
  display: inline-block;
}
</style>
