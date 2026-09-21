<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00780B, calcu01508A, calcu01098A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00780B(seed) - calcu01508A(seed) + calcu01098A(seed));
</script>

<template>
  <div class="blk">comp00468: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
