<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00971B, calcu00475A, calcu01051A, calcu00788A, calcu00199A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00971B(seed) - calcu00475A(seed) + calcu01051A(seed) - calcu00788A(seed) + calcu00199A(seed));
</script>

<template>
  <div class="blk">comp00485: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(180 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(0 50% 50%);
  display: inline-block;
}
</style>
