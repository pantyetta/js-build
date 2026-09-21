<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00545A, calcu00433B, calcu01478A, calcu01540A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00545A(seed) - calcu00433B(seed) + calcu01478A(seed) - calcu01540A(seed));
</script>

<template>
  <div class="blk">comp00990: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
