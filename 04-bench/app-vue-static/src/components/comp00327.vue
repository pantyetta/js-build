<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01502B, calcu00152A, calcu00975B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01502B(seed) - calcu00152A(seed) + calcu00975B(seed));
</script>

<template>
  <div class="blk">comp00327: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
