<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00935B, calcu01542A, calcu00551A, calcu00443A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00935B(seed) - calcu01542A(seed) + calcu00551A(seed) - calcu00443A(seed));
</script>

<template>
  <div class="blk">comp01929: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>
