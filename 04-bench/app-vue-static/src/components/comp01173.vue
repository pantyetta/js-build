<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01488A, calcu01090B, calcu01324A, calcu00978A, calcu01082A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01488A(seed) - calcu01090B(seed) + calcu01324A(seed) - calcu00978A(seed) + calcu01082A(seed));
</script>

<template>
  <div class="blk">comp01173: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(9 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(189 50% 50%);
  display: inline-block;
}
</style>
