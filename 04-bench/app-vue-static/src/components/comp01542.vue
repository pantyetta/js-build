<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00686A, calcu00798A, calcu00853B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00686A(seed) - calcu00798A(seed) + calcu00853B(seed));
</script>

<template>
  <div class="blk">comp01542: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(201 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(21 50% 50%);
  display: inline-block;
}
</style>
