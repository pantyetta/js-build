<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01428A, calcu00732B, calcu01131A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01428A(seed) - calcu00732B(seed) + calcu01131A(seed));
</script>

<template>
  <div class="blk">comp00287: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(29 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(209 50% 50%);
  display: inline-block;
}
</style>
