<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01149A, calcu00794A, calcu00719A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01149A(seed) - calcu00794A(seed) + calcu00719A(seed));
</script>

<template>
  <div class="blk">comp01489: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(259 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(79 50% 50%);
  display: inline-block;
}
</style>
