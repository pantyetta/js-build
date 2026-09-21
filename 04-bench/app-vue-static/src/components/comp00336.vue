<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01189A, calcu00602B, calcu00168B, calcu00747A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01189A(seed) - calcu00602B(seed) + calcu00168B(seed) - calcu00747A(seed));
</script>

<template>
  <div class="blk">comp00336: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(204 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(24 50% 50%);
  display: inline-block;
}
</style>
