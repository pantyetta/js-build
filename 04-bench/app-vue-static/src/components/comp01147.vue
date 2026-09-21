<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01225B, calcu00336B, calcu00883A, calcu00506B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01225B(seed) - calcu00336B(seed) + calcu00883A(seed) - calcu00506B(seed));
</script>

<template>
  <div class="blk">comp01147: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(283 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(103 50% 50%);
  display: inline-block;
}
</style>
