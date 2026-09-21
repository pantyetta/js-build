<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01037A, calcu01458A, calcu00587B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01037A(seed) - calcu01458A(seed) + calcu00587B(seed));
</script>

<template>
  <div class="blk">comp01846: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
