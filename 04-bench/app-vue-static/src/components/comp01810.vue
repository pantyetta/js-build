<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01381A, calcu01212B, calcu00529A, calcu01225B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01381A(seed) - calcu01212B(seed) + calcu00529A(seed) - calcu01225B(seed));
</script>

<template>
  <div class="blk">comp01810: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(50 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(230 50% 50%);
  display: inline-block;
}
</style>
