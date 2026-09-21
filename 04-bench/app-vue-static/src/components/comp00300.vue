<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00132B, calcu00830A, calcu01003B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00132B(seed) - calcu00830A(seed) + calcu01003B(seed));
</script>

<template>
  <div class="blk">comp00300: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(312 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(132 50% 50%);
  display: inline-block;
}
</style>
