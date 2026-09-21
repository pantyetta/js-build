<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01411A, calcu00286B, calcu00335B, calcu00415B, calcu00950B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01411A(seed) - calcu00286B(seed) + calcu00335B(seed) - calcu00415B(seed) + calcu00950B(seed));
</script>

<template>
  <div class="blk">comp01974: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(184 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(4 50% 50%);
  display: inline-block;
}
</style>
