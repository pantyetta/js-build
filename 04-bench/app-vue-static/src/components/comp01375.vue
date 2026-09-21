<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00707B, calcu01109B, calcu01542A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00707B(seed) - calcu01109B(seed) + calcu01542A(seed));
</script>

<template>
  <div class="blk">comp01375: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(187 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(7 50% 50%);
  display: inline-block;
}
</style>
