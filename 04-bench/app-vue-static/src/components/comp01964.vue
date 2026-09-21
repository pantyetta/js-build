<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00090B, calcu00018A, calcu01173B, calcu00117B, calcu00179A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00090B(seed) - calcu00018A(seed) + calcu01173B(seed) - calcu00117B(seed) + calcu00179A(seed));
</script>

<template>
  <div class="blk">comp01964: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(266 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(86 50% 50%);
  display: inline-block;
}
</style>
