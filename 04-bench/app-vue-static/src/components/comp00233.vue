<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01158A, calcu00599B, calcu01359A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01158A(seed) - calcu00599B(seed) + calcu01359A(seed));
</script>

<template>
  <div class="blk">comp00233: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(142 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(322 50% 50%);
  display: inline-block;
}
</style>
