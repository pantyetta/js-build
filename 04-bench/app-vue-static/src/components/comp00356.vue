<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00925A, calcu01474A, calcu01463A, calcu00293B, calcu00942B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00925A(seed) - calcu01474A(seed) + calcu01463A(seed) - calcu00293B(seed) + calcu00942B(seed));
</script>

<template>
  <div class="blk">comp00356: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(185 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(5 50% 50%);
  display: inline-block;
}
</style>
