<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01100A, calcu01301A, calcu00445B, calcu00266B, calcu01181B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01100A(seed) - calcu01301A(seed) + calcu00445B(seed) - calcu00266B(seed) + calcu01181B(seed));
</script>

<template>
  <div class="blk">comp00398: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
