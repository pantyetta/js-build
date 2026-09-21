<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01431B, calcu00506B, calcu00822A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01431B(seed) - calcu00506B(seed) + calcu00822A(seed));
</script>

<template>
  <div class="blk">comp00308: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
