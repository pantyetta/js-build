<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01490B, calcu01289A, calcu00529A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01490B(seed) - calcu01289A(seed) + calcu00529A(seed));
</script>

<template>
  <div class="blk">comp01761: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
