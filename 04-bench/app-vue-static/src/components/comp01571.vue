<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00343B, calcu00996B, calcu00399A, calcu00724A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00343B(seed) - calcu00996B(seed) + calcu00399A(seed) - calcu00724A(seed));
</script>

<template>
  <div class="blk">comp01571: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
