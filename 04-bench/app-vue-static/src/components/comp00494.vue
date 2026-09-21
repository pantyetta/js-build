<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00274B, calcu00723A, calcu00286B, calcu00631A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00274B(seed) - calcu00723A(seed) + calcu00286B(seed) - calcu00631A(seed));
</script>

<template>
  <div class="blk">comp00494: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
