<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00665B, calcu01580A, calcu01081B, calcu00060B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00665B(seed) - calcu01580A(seed) + calcu01081B(seed) - calcu00060B(seed));
</script>

<template>
  <div class="blk">comp01897: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>
