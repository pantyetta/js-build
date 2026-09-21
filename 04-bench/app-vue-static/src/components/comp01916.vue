<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01507A, calcu01542B, calcu00499A, calcu00016B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01507A(seed) - calcu01542B(seed) + calcu00499A(seed) - calcu00016B(seed));
</script>

<template>
  <div class="blk">comp01916: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
