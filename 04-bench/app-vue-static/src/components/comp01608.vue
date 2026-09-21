<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01387B, calcu00025A, calcu00663B, calcu00105B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01387B(seed) - calcu00025A(seed) + calcu00663B(seed) - calcu00105B(seed));
</script>

<template>
  <div class="blk">comp01608: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
