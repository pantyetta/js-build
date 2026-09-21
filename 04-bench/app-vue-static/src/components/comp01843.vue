<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01195A, calcu01176B, calcu00681A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01195A(seed) - calcu01176B(seed) + calcu00681A(seed));
</script>

<template>
  <div class="blk">comp01843: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(100 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(280 50% 50%);
  display: inline-block;
}
</style>
