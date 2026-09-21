<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00486A, calcu00937B, calcu01443A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00486A(seed) - calcu00937B(seed) + calcu01443A(seed));
</script>

<template>
  <div class="blk">comp00720: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(138 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(318 50% 50%);
  display: inline-block;
}
</style>
