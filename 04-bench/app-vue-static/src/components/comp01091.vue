<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00042B, calcu01515B, calcu00844B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00042B(seed) - calcu01515B(seed) + calcu00844B(seed));
</script>

<template>
  <div class="blk">comp01091: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(117 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(297 50% 50%);
  display: inline-block;
}
</style>
