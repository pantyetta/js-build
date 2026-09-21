<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00825B, calcu00541B, calcu00001A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00825B(seed) - calcu00541B(seed) + calcu00001A(seed));
</script>

<template>
  <div class="blk">comp01788: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
