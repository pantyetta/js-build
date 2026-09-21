<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00274B, calcu01194A, calcu01086A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00274B(seed) - calcu01194A(seed) + calcu01086A(seed));
</script>

<template>
  <div class="blk">comp01893: {{ total }}</div>
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
