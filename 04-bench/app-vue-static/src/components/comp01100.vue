<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00305B, calcu01029B, calcu00557A, calcu00827A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00305B(seed) - calcu01029B(seed) + calcu00557A(seed) - calcu00827A(seed));
</script>

<template>
  <div class="blk">comp01100: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(17 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(197 50% 50%);
  display: inline-block;
}
</style>
