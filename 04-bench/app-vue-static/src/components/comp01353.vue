<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01133B, calcu00940A, calcu00184A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01133B(seed) - calcu00940A(seed) + calcu00184A(seed));
</script>

<template>
  <div class="blk">comp01353: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(81 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(261 50% 50%);
  display: inline-block;
}
</style>
