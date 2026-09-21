<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00047B, calcu00000A, calcu01251B, calcu00648A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00047B(seed) - calcu00000A(seed) + calcu01251B(seed) - calcu00648A(seed));
</script>

<template>
  <div class="blk">comp00819: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
