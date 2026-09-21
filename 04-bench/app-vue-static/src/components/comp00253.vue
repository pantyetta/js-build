<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00543B, calcu00158B, calcu00159B, calcu00800A, calcu00380B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00543B(seed) - calcu00158B(seed) + calcu00159B(seed) - calcu00800A(seed) + calcu00380B(seed));
</script>

<template>
  <div class="blk">comp00253: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(95 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(275 50% 50%);
  display: inline-block;
}
</style>
