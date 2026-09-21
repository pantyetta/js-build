<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00154B, calcu00506B, calcu01237B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00154B(seed) - calcu00506B(seed) + calcu01237B(seed));
</script>

<template>
  <div class="blk">comp01784: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(329 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(149 50% 50%);
  display: inline-block;
}
</style>
