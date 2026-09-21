<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01531A, calcu00611A, calcu01178A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01531A(seed) - calcu00611A(seed) + calcu01178A(seed));
</script>

<template>
  <div class="blk">comp00719: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
