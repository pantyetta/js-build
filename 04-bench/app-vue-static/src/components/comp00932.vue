<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00637B, calcu00037A, calcu00891B, calcu00008B, calcu00100A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00637B(seed) - calcu00037A(seed) + calcu00891B(seed) - calcu00008B(seed) + calcu00100A(seed));
</script>

<template>
  <div class="blk">comp00932: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(5 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(185 50% 50%);
  display: inline-block;
}
</style>
