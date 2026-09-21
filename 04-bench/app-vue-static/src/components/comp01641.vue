<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01282B, calcu00188A, calcu00364B, calcu01443B, calcu01132A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01282B(seed) - calcu00188A(seed) + calcu00364B(seed) - calcu01443B(seed) + calcu01132A(seed));
</script>

<template>
  <div class="blk">comp01641: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(157 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(337 50% 50%);
  display: inline-block;
}
</style>
