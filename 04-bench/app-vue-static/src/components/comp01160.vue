<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00485A, calcu01404A, calcu01290B, calcu00749B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00485A(seed) - calcu01404A(seed) + calcu01290B(seed) - calcu00749B(seed));
</script>

<template>
  <div class="blk">comp01160: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>
