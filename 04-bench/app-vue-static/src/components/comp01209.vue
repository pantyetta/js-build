<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00180A, calcu00339A, calcu00503B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00180A(seed) - calcu00339A(seed) + calcu00503B(seed));
</script>

<template>
  <div class="blk">comp01209: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(114 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(294 50% 50%);
  display: inline-block;
}
</style>
