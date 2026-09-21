<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01181B, calcu01147B, calcu00869B, calcu00689B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01181B(seed) - calcu01147B(seed) + calcu00869B(seed) - calcu00689B(seed));
</script>

<template>
  <div class="blk">comp00716: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(330 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(150 50% 50%);
  display: inline-block;
}
</style>
