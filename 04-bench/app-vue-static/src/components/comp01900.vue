<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01395B, calcu00177A, calcu01245B, calcu00716A, calcu00204B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01395B(seed) - calcu00177A(seed) + calcu01245B(seed) - calcu00716A(seed) + calcu00204B(seed));
</script>

<template>
  <div class="blk">comp01900: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
