<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00158A, calcu01063A, calcu00737B, calcu00876B, calcu01116A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00158A(seed) - calcu01063A(seed) + calcu00737B(seed) - calcu00876B(seed) + calcu01116A(seed));
</script>

<template>
  <div class="blk">comp00302: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
