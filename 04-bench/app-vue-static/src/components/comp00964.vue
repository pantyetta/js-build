<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01157A, calcu00005A, calcu01123A, calcu00045A, calcu01542A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01157A(seed) - calcu00005A(seed) + calcu01123A(seed) - calcu00045A(seed) + calcu01542A(seed));
</script>

<template>
  <div class="blk">comp00964: {{ total }}</div>
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
