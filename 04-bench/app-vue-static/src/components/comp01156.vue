<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00704A, calcu00988B, calcu01598A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00704A(seed) - calcu00988B(seed) + calcu01598A(seed));
</script>

<template>
  <div class="blk">comp01156: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(341 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(161 50% 50%);
  display: inline-block;
}
</style>
