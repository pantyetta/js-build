<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01389A, calcu00367B, calcu00166A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01389A(seed) - calcu00367B(seed) + calcu00166A(seed));
</script>

<template>
  <div class="blk">comp00260: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(311 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(131 50% 50%);
  display: inline-block;
}
</style>
