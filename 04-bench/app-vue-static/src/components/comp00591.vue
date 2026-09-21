<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00072A, calcu01357B, calcu01411B, calcu00545B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00072A(seed) - calcu01357B(seed) + calcu01411B(seed) - calcu00545B(seed));
</script>

<template>
  <div class="blk">comp00591: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
