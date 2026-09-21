<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01474B, calcu00167A, calcu00685A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01474B(seed) - calcu00167A(seed) + calcu00685A(seed));
</script>

<template>
  <div class="blk">comp01731: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(223 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(43 50% 50%);
  display: inline-block;
}
</style>
