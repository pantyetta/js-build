<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00810B, calcu01367B, calcu01472B, calcu00397B, calcu01029A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00810B(seed) - calcu01367B(seed) + calcu01472B(seed) - calcu00397B(seed) + calcu01029A(seed));
</script>

<template>
  <div class="blk">comp01534: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
