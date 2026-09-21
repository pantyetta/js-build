<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01122A, calcu00718B, calcu01135B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01122A(seed) - calcu00718B(seed) + calcu01135B(seed));
</script>

<template>
  <div class="blk">comp00022: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(339 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(159 50% 50%);
  display: inline-block;
}
</style>
