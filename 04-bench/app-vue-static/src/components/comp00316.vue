<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00857B, calcu00830B, calcu00757A, calcu01410B, calcu00988B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00857B(seed) - calcu00830B(seed) + calcu00757A(seed) - calcu01410B(seed) + calcu00988B(seed));
</script>

<template>
  <div class="blk">comp00316: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
