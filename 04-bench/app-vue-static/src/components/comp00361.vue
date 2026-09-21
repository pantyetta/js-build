<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00158B, calcu00757A, calcu00430B, calcu00683B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00158B(seed) - calcu00757A(seed) + calcu00430B(seed) - calcu00683B(seed));
</script>

<template>
  <div class="blk">comp00361: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(65 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(245 50% 50%);
  display: inline-block;
}
</style>
