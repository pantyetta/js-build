<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01281B, calcu01376A, calcu00555B, calcu00455A, calcu00399B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01281B(seed) - calcu01376A(seed) + calcu00555B(seed) - calcu00455A(seed) + calcu00399B(seed));
</script>

<template>
  <div class="blk">comp00652: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
