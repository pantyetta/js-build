<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00786A, calcu01228A, calcu01511A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00786A(seed) - calcu01228A(seed) + calcu01511A(seed));
</script>

<template>
  <div class="blk">comp01541: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>
