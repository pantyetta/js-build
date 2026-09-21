<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00588B, calcu00159A, calcu00799A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00588B(seed) - calcu00159A(seed) + calcu00799A(seed));
</script>

<template>
  <div class="blk">comp00267: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(207 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(27 50% 50%);
  display: inline-block;
}
</style>
